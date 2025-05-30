"use client"
import React from "react";
import { BiUser } from "react-icons/bi";
import { RxSlash } from "react-icons/rx";
import Link from "next/link";
import ClientLayout from "../ClientLayout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Forgot Password Submit:", data);
  };

  return (
    <ClientLayout>
      <div className="px-4 md:max-w-7xl mx-auto mb-30">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-gray-900 text-sm mb-6 py-4">
          <Link href="/" className="font-normal">
            Home
          </Link>
          <RxSlash />
          <Link href="/forgotPassword" className="text-red-500">Forgot Password</Link>
        </nav>

        {/* Main Form */}
        <div className="flex justify-center px-4">
          <div className="w-full max-w-md space-y-6 text-center">
            {/* Header */}
            <div className="flex flex-col">
              <BiUser className="mx-auto text-7xl text-gray-600" />
              <h2 className="text-3xl font-bold text-gray-900">FORGOT PASSWORD</h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="text-left">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-5 py-4 text-lg border rounded-md bg-blue-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.email && (
                  <p className="text-left text-xs text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-4 text-lg bg-[#b99b9b] text-white font-semibold rounded-full hover:bg-[#a18484] transition"
              >
                SEND INSTRUCTIONS
              </button>
            </form>
          
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default ForgotPasswordPage;
