"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ClientLayout from "../ClientLayout";
import Link from "next/link";
import { RxSlash } from "react-icons/rx";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8)
    .matches(/[A-Za-z]/, "At least one letter")
    .matches(/[0-9]/, "At least one number")
    .matches(/[@$!%*#?&]/, "At least one special character"),
});
const RegisterForm = () => {
const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const password = watch("password", "");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Submitted:", data);
  };

  const checkValid = {
    length: password.length >= 8,
    letter: /[A-Za-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[@$!%*#?&]/.test(password),
  };

  const reqBox = (label, isValid) => (
    <div className={`px-2 py-1.5 text-md rounded ${isValid ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"}`}>
      {label}
    </div>
  );


  return (
    <ClientLayout>
      <div className='px-4 md:max-w-7xl mx-auto items-center mb-5 md:mb-10 mt-5'>
     <nav className="flex items-center space-x-2 text-gray-900 text-sm mb-3">
      <Link href="/" className="font-normal">
        Home
      </Link>
      <RxSlash/>
      <Link href="/register" className="text-red-500">
        Register
      </Link>
    </nav>
      <div className='flex md:justify-center'>
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900">CREATE YOUR ACCOUNT</h2>
      </div>
      </div>
      <hr className="text-gray-200"/>
    <div className="max-w-3xl mx-auto p-6 rounded-2xl md:shadow-md my-6">
      {/* Progress */}
      <div className="h-2 bg-gray-200 rounded-full mb-6">
        <div className="w-full bg-yellow-400 h-full rounded-full" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-lg font-bold text-gray-800">FULL NAME</label>
          <p className="text-xs text-gray-500">Please enter all your details as they appear on your identity document. This information will be validated during the transfer of winnings.</p>
          <input
            {...register("fullName")}
            className="w-full px-4 py-3 border border-gray-400 rounded-full bg-gray-50 mt-1 outline-none"
          />
          {errors.fullName && <p className="text-xs text-red-500">{errors.fullName.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-lg font-bold text-gray-800">MOBILE PHONE NUMBER</label>
          <div className="flex items-center border border-gray-400 rounded-full bg-gray-50 mt-1">
            <span className="px-3 text-gray-700 border-r">+91</span>
            <input
              {...register("phone")}
              type="tel"
              className="flex-1 px-4 py-3 outline-none bg-transparent"
            />
          </div>
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-bold text-gray-800">EMAIL ADDRESS</label>
          <p className="text-xs text-gray-500">Ticket information and invoices will be shared over email. Please ensure that your email is correct for seamless communication.</p>
          <input
            {...register("email")}
            type="email"
            className="w-full px-4 py-3 border border-gray-400 rounded-full bg-gray-50 mt-1 outline-none"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-lg font-bold text-gray-800">PASSWORD</label>
          <div className="relative mt-1">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 border border-gray-400 rounded-full bg-gray-50 outline-none pr-10"
            />
            <span
              className="absolute right-4 top-3.5 text-xl text-gray-900 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}

          {/* Password Requirements */}
          <div className="grid  md:grid-cols-4 grid-cols-2 gap-2 mt-2">
            {reqBox("8 characters", checkValid.length)}
            {reqBox("1 letter", checkValid.letter)}
            {reqBox("1 number", checkValid.number)}
            {reqBox("@ $ ! % * # ? &", checkValid.special)}
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center my-8">
        <button
          type="submit"
          className="w-40 bg-gray-400 text-white font-bold py-3 rounded-full hover:bg-gray-500 transition"
          >
          NEXT
        </button>
        </div>
      </form>

      {/* Login Link */}
      <div className="flex items-center text-center justify-center my-8 border-t pt-6 border-gray-400">
        <div>
        <p className="text-lg font-bold text-gray-800">EXISTING USER?</p>
        <button onClick={()=>router.push('/login')} className="bg-red-600 text-white w-60 py-2 rounded-full font-semibold mt-2 hover:bg-red-700 transition">
          LOG IN
        </button>
        </div>
      </div>
    </div>
   
    </ClientLayout>
  );
};

export default RegisterForm;
