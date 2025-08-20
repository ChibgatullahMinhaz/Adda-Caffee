import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { type UserCredential } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";
import useAuth from "../../Hook/useAuth";

// Types
interface LoginForm {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>();

  const email = watch("email");

  // 🔐 Login Mutation
  const loginMutation = useMutation<UserCredential, FirebaseError, LoginForm>({
    mutationFn: async ({ email, password }) => {
      return await userLogin(email, password);
    },
    onSuccess: async (result) => {
      const userInfo = {
        email: result.user.email,
        isOnline: true,
        lastSignInTime: result.user.metadata.lastSignInTime,
      };

      const { data } = await axios.patch("https://coffee-server-lyart.vercel.app/users", userInfo);

      if (data?.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully logged in!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state || "/");
      }
    },
    onError: (error) => {
      if (error instanceof FirebaseError) {
        const errorCode = error.code;
        if (errorCode === "auth/user-not-found") {
          toast.warning("Invalid User! Please create an account.");
        } else if (errorCode === "auth/wrong-password") {
          toast.warning("Wrong Password");
        } else if (errorCode === "auth/invalid-credential") {
          toast.warn("Invalid email or password");
        } else {
          toast.error("Login failed.");
        }
      }
    },
  });


  const onSubmit = (data: LoginForm) => {
    loginMutation.mutate(data);
  };


  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      id="login"
      className="w-full max-w-md mx-auto my-5 bg-[#F4F3F0] rounded-box p-8 space-y-3 overflow-hidden"
    >
      <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
      <p className="text-center">Login with Coffee House</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label className="block">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="space-y-1 text-sm">
          <label className="block">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 pr-10 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          <div onClick={() => navigate("/forgetPassword", { state: { email } })} className="flex justify-end text-xs mt-1">
            <Link to="/forgetPassword">Forgot Password?</Link>
          </div>
        </div>

        <button
          type="submit"
          disabled={loginMutation.isPending}
          className="block w-full bg-[var(--btnColor)] p-3 text-center rounded-sm"
        >
          {loginMutation.isPending ? "Signing in..." : "Sign In"}
        </button>
      </form>

    

      <p className="text-lg text-center">
        Don't have an account?{" "}
        <Link to="/singUp" className="underline text-blue-600">
          Sign up
        </Link>
      </p>
    </motion.div>
  );
};

export default Signin;
