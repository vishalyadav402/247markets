"use client";
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { RxSlash } from "react-icons/rx";
import Link from "next/link";
import ClientLayout from "../ClientLayout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// Validation Schemas
const emailSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const passwordSchema = yup.object().shape({
  newPassword: yup.string().min(6, "Min 6 characters").required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your password"),
});

const ForgotPasswordPage = () => {
  const [step, setStep] = useState(1);
  const [emailValue, setEmailValue] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(step === 1 ? emailSchema : passwordSchema),
  });

  const handleContinue = (data) => {
    setEmailValue(data.email);
    setStep(2);
    reset();
  };

  const handleCreatePassword = (data) => {
    const payload = { email: emailValue, ...data };
    console.log("Final Submit:", payload);

    // Simulate API success
    setSuccess(true);
    reset();
  };

  return (
    <ClientLayout>
      <div className="px-4 md:max-w-7xl mx-auto mb-30">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-gray-900 text-sm mb-6 py-4">
          <Link href="/" className="font-normal">Home</Link>
          <RxSlash />
          <Link href="/forgotPassword" className="text-red-500">Forgot Password</Link>
        </nav>

        {/* Main Form or Message */}
        <div className="flex justify-center px-4">
          <div className="w-full max-w-md space-y-6 text-center">

            {/* Header */}
            <div className="flex flex-col">
              <BiUser className="mx-auto text-7xl text-gray-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                {success ? "Success!" : step === 1 ? "FORGOT PASSWORD" : "CREATE NEW PASSWORD"}
              </h2>
            </div>

            {/* Success Message */}
            {success ? (
              <div className="space-y-4">
                <p className="text-green-600 text-lg font-semibold">
                  Password created successfully!
                </p>
                <Link
                  href="/login"
                  className="inline-block w-full py-3 text-lg bg-green-600 text-white rounded-full hover:bg-green-700 transition"
                >
                  Go to Login
                </Link>
              </div>
            ) : (
              // Form
              <form onSubmit={handleSubmit(step === 1 ? handleContinue : handleCreatePassword)} className="space-y-4">
                {/* Step 1: Email */}
                {step === 1 && (
                  <div className="text-left">
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-5 py-4 text-lg border rounded-md bg-blue-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {errors.email && (
                      <p className="text-left text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                )}

                {/* Step 2: Password Fields */}
                {step === 2 && (
                  <>
                    <p className="text-left text-sm text-gray-500">
                      Email: <span className="font-semibold text-gray-800">{emailValue}</span>
                    </p>

                    {/* New Password */}
                    <div className="relative text-left">
                      <input
                        {...register("newPassword")}
                        type={passwordVisible ? "text" : "password"}
                        placeholder="New Password"
                        className="w-full px-5 py-4 text-lg border rounded-md bg-blue-50 text-gray-700 placeholder-gray-500 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <div
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                        onClick={() => setPasswordVisible(!passwordVisible)}
                      >
                        {passwordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </div>
                      {errors.newPassword && (
                        <p className="text-left text-xs text-red-500 mt-1">{errors.newPassword.message}</p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="relative text-left">
                      <input
                        {...register("confirmPassword")}
                        type={confirmPasswordVisible ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="w-full px-5 py-4 text-lg border rounded-md bg-blue-50 text-gray-700 placeholder-gray-500 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <div
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                        onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                      >
                        {confirmPasswordVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-left text-xs text-red-500 mt-1">{errors.confirmPassword.message}</p>
                      )}
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full py-4 text-lg bg-[#b99b9b] text-white font-semibold rounded-full hover:bg-[#a18484] transition"
                >
                  {step === 1 ? "CONTINUE" : "CREATE NEW PASSWORD"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default ForgotPasswordPage;
