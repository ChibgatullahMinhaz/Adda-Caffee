import React, {  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {  type UserCredential } from "firebase/auth";
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
  const context = useAuth();
  console.log(context)
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

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

  // // 🔐 Google Sign-In
  // const handleLoginWithGoogle = async () => {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     const result = await creteUserWithGoogle(provider);
  //     const email = result.user.email;
  //     const encodedEmail = encodeURIComponent(email);

  //     const { data: existingUser } = await axios.get(
  //       `https://coffee-server-lyart.vercel.app/thirdPartyUsers?email=${encodedEmail}`
  //     );

  //     if (!existingUser) {
  //       await axios.post("https://coffee-server-lyart.vercel.app/thirdPartyUsers", {
  //         email,
  //         displayName: result.user.displayName,
  //       });
  //     }

  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "Login Successfully.",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });

  //     navigate(location?.state || "/");
  //   } catch (err) {
  //     console.error(err);
  //     toast.error("Google sign-in failed.");
  //   }
  // };



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

      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px"></div>
        <p className="px-3 text-md text-gray-600">or</p>
        <div className="flex-1 h-px"></div>
      </div>
      {/* 
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleLoginWithGoogle}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
          <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458..."></path>
          </svg>
        </button>
      </div> */}

      <p className="text-lg text-center">
        Don't have an account?{" "}
        <Link to="/signUp" className="underline text-blue-600">
          Sign up
        </Link>
      </p>
    </motion.div>
  );
};

export default Signin;
