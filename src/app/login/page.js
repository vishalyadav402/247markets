import Link from 'next/link';
import React from 'react';
import { BiUser } from "react-icons/bi";
import { RxSlash } from "react-icons/rx";
import ClientLayout from '../ClientLayout';

const Page = () => {
  return (
    <ClientLayout>
    <div className='px-4 md:max-w-7xl mx-auto items-center mb-10'>
     <nav className="flex items-center space-x-2 text-gray-900 text-sm mb-6 py-4">
      <Link href="/" className="font-normal">
        Home
      </Link>
      <RxSlash/>
      <Link href="/login" className="text-red-500">
        Log In
      </Link>
    </nav>
    
    <div className="flex items-center justify-center px-4">
       
      <div className="w-full max-w-md space-y-4 text-center">
        <div className='flex flex-col'>
        <BiUser className="mx-auto text-7xl text-gray-600 font-light" />
        <h2 className="text-3xl font-bold text-gray-900">SIGN IN</h2>
        </div>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Username, email or phone*"
            className="w-full px-5 py-4 text-lg border rounded-md bg-blue-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password*"
            className="w-full px-5 py-4 text-lg border rounded-md bg-blue-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full py-4 text-lg bg-[#b99b9b] text-white font-semibold rounded-full hover:bg-[#a18484] transition"
          >
            LOG IN
          </button>
        </form>

        <div className="flex justify-end text-base text-rose-600 my-6">
          <a href="/forgotPassword" className="hover:underline">
            Forgot Password
          </a>
          <span className="px-1 text-gray-600">|</span>
          <a href="/forgotUsername" className="hover:underline">
            Forgot Username
          </a>
        </div>

        <div className="border-b border-gray-400 mb-5"></div>

        <div className="text-lg text-gray-700">
          Not a member?{' '}
          <a href="/register" className="text-rose-600 font-normal hover:underline">
            Create Account
          </a>
        </div>


      </div>
    </div>
    </div>
    </ClientLayout>
  );
};

export default Page;
