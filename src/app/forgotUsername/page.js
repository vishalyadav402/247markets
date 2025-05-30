"use client";
import React from "react";
import { BiUser } from "react-icons/bi";
import { RxSlash } from "react-icons/rx";
import Link from "next/link";
import ClientLayout from "../ClientLayout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Validation Schema
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const ForgotUsernamePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Forgot Username Submit:", data);
  };

  return (
    <ClientLayout>
      <div className="px-4 md:max-w-7xl mx-auto mb-30">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-gray-900 text-sm mb-6 py-4">
          <Link href="/" className="font-normal">Home</Link>
          <RxSlash />
          <Link href="/forgotUsername" className="text-red-500">Forgot Username</Link>
        </nav>

        {/* Main Form */}
        <div className="flex justify-center px-4">
          <div className="w-full max-w-md space-y-6 text-center">
            {/* Header */}
            <div className="flex flex-col">
              <BiUser className="mx-auto text-7xl text-gray-600" />
              <h2 className="text-3xl font-bold text-gray-900">FORGOT USERNAME</h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  className="w-full px-5 py-3 text-lg border rounded-md bg-blue-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  className="w-full px-5 py-3 text-lg border rounded-md bg-blue-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-5 py-3 text-lg border rounded-md bg-blue-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 text-lg bg-[#b99b9b] text-white font-semibold rounded-full hover:bg-[#a18484] transition"
              >
                SEND MY USERNAME
              </button>
            </form>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default ForgotUsernamePage;
