"use client";
import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { TfiShoppingCart } from "react-icons/tfi";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-[#02154e] py-0 shadow-md" : "bg-[#02154e] py-4"
        } text-white px-4`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="/247-marketing.png"
              alt="247 Markets"
              className="h-[4.5rem] md:h-[6em] cursor-pointer"
              onClick={()=>router.push('/')}
            />
          </div>

          {/* Mobile Right Icons */}
          <div className="flex items-center md:hidden space-x-4">
            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10">
              <TfiShoppingCart className="text-2xl text-red-400" />
            </div>
            <div className="flex items-center justify-center bg-white rounded-full w-10 h-10">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {isSidebarOpen ? (
                  <FaTimes className="text-2xl" />
                ) : (
                  <HiBars3BottomLeft className="text-2xl text-red-400" />
                )}
              </button>
            </div>
          </div>

          {/* Desktop Auth + Nav */}
          <div className="hidden md:flex flex-col items-end text-right w-full">
            <div className="flex items-center justify-end space-x-4 text-md mb-6">
              <a href="/login" className="border-b leading-4 border-red-500">
                Sign In
              </a>
              <span>/</span>
              <a href="/register" className="border-b leading-4 border-red-500">
                Register
              </a>
              <TfiShoppingCart className="text-2xl" />
              <div className="flex items-center space-x-1 font-semibold">
                <span>EN</span>
                <MdKeyboardArrowDown className="text-red-500" size={22} />
              </div>
            </div>

            <nav className="text-md font-semibold">
              <ul className="flex flex-wrap justify-end gap-x-4 gap-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    GAMES
                  </a>
                </li>
                <span className="text-white">|</span>
                <li>
                  <a href="#" className="hover:underline">
                    RESULTS
                  </a>
                </li>
                <span className="text-white">|</span>
                <li>
                  <a href="#" className="hover:underline">
                    GIVING BACK
                  </a>
                </li>
                <span className="text-white">|</span>
                <li>
                  <a href="#" className="hover:underline">
                    LOYALTY
                  </a>
                </li>
                <span className="text-white">|</span>
                <li>
                  <a href="#" className="hover:underline">
                    PROMOTIONS
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1a1541] text-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 flex flex-col space-y-6">
          <div className="flex justify-end">
            <button onClick={() => setIsSidebarOpen(false)}>
              <FaTimes className="text-2xl" />
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#" className="border-b border-red-500 w-max">
              Sign In
            </a>
            <a href="#" className="border-b border-red-500 w-max">
              Register
            </a>
          </div>

          <div className="flex items-center space-x-1 font-semibold">
            <span>EN</span>
            <MdKeyboardArrowDown className="text-red-500" />
          </div>

          <nav className="text-sm font-semibold">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#" className="hover:underline">
                  GAMES
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  RESULTS
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  GIVING BACK
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LOYALTY
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  PROMOTIONS
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
