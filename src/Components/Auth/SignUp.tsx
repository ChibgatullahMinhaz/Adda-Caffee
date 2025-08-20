import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import type { UserCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import useAuth from "../../Hook/useAuth";
import axiosPublicInstance from "../../api/axiosPublicInstance";
interface FormValues {
    email: string
    password: string
    name: string
    terms: boolean
    photo: string
}
const createUserWithBackend = async (
    userData: FormValues,
    userRegister: (email: string, password: string) => Promise<UserCredential>,
    navigate: (path: string) => void
): Promise<UserCredential> => {
    const { email, password, name, photo, terms } = userData;

    if (!terms) {
        toast.warn("Please accept our terms and conditions.");
        throw new Error("Terms not accepted.");
    }

    try {
        const result = await userRegister(email, password);

        const userInfo = {
            email,
            password,
            name,
            photo,
            terms,
            creationTime: result.user?.metadata?.creationTime,
            lastSignInTime: result.user?.metadata?.lastSignInTime,
            phoneNumber: result.user?.phoneNumber,
        };

        const { data } = await axiosPublicInstance.post("/users", userInfo);


        if (data.acknowledged) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Account Created Successfully.",
                showConfirmButton: false,
                timer: 1500,
            });

            navigate("/");
        }

        return result;
    } catch (error) {
        console.error("Signup Error:", error);
        if (error instanceof Error) {
            toast.warning("You may already have an account! Please login.");
        }
        throw error;
    }
};


const SignUp: React.FunctionComponent = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { userRegister } = useAuth()
    const {
        register,
        handleSubmit,
    } = useForm<FormValues>();

    // mutation
    const signUpMutation = useMutation<UserCredential, FirebaseError, FormValues>({
        mutationFn: (userData) => createUserWithBackend(userData, userRegister, navigate),
    });




    const onSubmit = (data: FormValues) => {
        signUpMutation.mutate(data);
        console.log(data)
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0 }}
            id="create"
            className="w-full max-w-md mx-auto my-5 bg-[#F4F3F0] rounded-box p-8 space-y-3 rounded-x overflow-hidden"
        >
            <h1 className="text-2xl font-bold text-center">Create An Account</h1>
            <p className="text-center">Create with Coffee House</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block">
                        Name
                    </label>
                    <input
                        type="text"
                        required
                        {...register("name", { required: "Name is required" })}
                        placeholder="Enter Your name"
                        className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block">
                        Email
                    </label>
                    <input
                        type="email"
                        required
                        {...register("email", { required: "Email is required" })}
                        placeholder="Enter Your Email"
                        className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block">
                        Photo URL
                    </label>
                    <input
                        type="text"
                        {...register("photo", { required: "photo is required" })}
                        placeholder="Enter Your photo URL"
                        className="w-full px-4 py-3 rounded-md bg-white focus:outline-[var(--btnColor)]"
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            {...register('password', { required: "Password id required" })}
                            placeholder="Password"
                            className="w-full px-4 pr-10 bg-white focus:outline-[var(--btnColor)] py-3 rounded-md"
                        />
                        <div
                            onClick={handleShowPassword}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>
                </div>
                {/* checkbox */}
                <label className="label">
                    <input
                        type="checkbox"
                        defaultChecked
                        {...register("terms", { required: "terms and condition is Required" })}
                        className="checkbox"
                    />
                    Agree with our <span className="link text-blue-600">Terms</span> &
                    Conditions
                </label>
                <button
                    type="submit"
                    className="block w-full bg-[var(--btnColor)] cursor-pointer p-3 text-center rounded-sm"
                >
                    Create Account
                </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 "></div>
                <p className="px-3 text-md dark:text-gray-600">
                    Login with social account
                </p>
                <div className="flex-1 h-px sm:w-16 "></div>
            </div>
            <div className="flex justify-center space-x-4">
                {/* <button
                    onClick={handleLoginWithGoogle}
                    aria-label="Log in with Google"
                    className="p-3 rounded-sm"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        className="w-5 h-5 fill-current"
                    >
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button> */}
            </div>
            <p className="text-lg text-center sm:px-6">
                Your have an account?
                <Link to="/login" className="underline link-accent text-blue-600">
                    Signin
                </Link>
            </p>
        </motion.div>
    );
};

export default SignUp;
