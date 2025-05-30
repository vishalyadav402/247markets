"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // If using Next.js

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);


  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white text-center px-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
      <div className="w-full max-w-md">
        <img
          src="/404-error.png" // Replace with a real image path or URL
          alt="Page not found"
          className="w-full h-auto cursor-pointer"
          onClick={()=>router.push('/')}
        />
      </div>
      <p className="text-[#050505]">
        The page you're looking for doesn't exist or has been moved.<br />
        Redirecting you to the homepage...
      </p>
    </div>
  );
};

export default NotFound;
