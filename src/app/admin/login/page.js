import ClientLayout from '@/app/ClientLayout';
import React from 'react';
import { BiUser } from "react-icons/bi";

const Page = () => {
  return (
    <ClientLayout>
    <div className='m-auto flex justify-center items-center min-h-screen'>
    
    <div className="flex items-center justify-center bg-white px-4">
       
      <div className="w-full max-w-md space-y-8 text-center">
        <div className='flex flex-col'>
        <BiUser className="mx-auto text-7xl text-gray-600 font-light" />
        <h2 className="text-3xl font-bold text-gray-900">LOGIN</h2>
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

        <div className="flex justify-end text-base text-rose-600 mb-3">
          <a href="#" className="hover:underline">
            Forgot Password
          </a>
          <span className="px-1 text-gray-600">|</span>
          <a href="#" className="hover:underline">
            Forgot Username
          </a>
        </div>

        <div className="border-b border-gray-400 mb-3"></div>

        <div className="text-lg text-gray-700">
          Not a member?{' '}
          <a href="#" className="text-rose-600 font-normal hover:underline">
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
