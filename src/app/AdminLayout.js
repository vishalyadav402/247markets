"use client"
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

export default function AdminLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 dark:bg-gray-950 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 shadow-md">
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <LuMenu size={24} />
        </button>
        <h1 className="text-xl font-bold">Welcome Admin 🧐</h1>
        <button className="bg-pink-600 px-4 py-2 rounded-lg shadow-sm hover:bg-pink-700 transition">
          Logout
        </button>
      </header>

      {/* Sidebar (Desktop) */}
      <aside className="hidden md:block bg-gray-800 dark:bg-gray-950 text-white w-64 fixed top-16 left-0 h-[calc(100%-4rem)]">
        <ul className="h-full overflow-y-auto">
          <li className="py-2 pt-4 px-4 hover:bg-pink-700 cursor-pointer">
            <a href="dashboard" className="block">Dashboard</a>
          </li>
          <li className="py-2 px-4 hover:bg-pink-700 cursor-pointer">
            <a href="contest" className="block">Manage Contest</a>
          </li>
          <li className="py-2 px-4 hover:bg-pink-700 cursor-pointer">
            <a href="customer" className="block">Manage Customer</a>
          </li>
          <li className="py-2 px-4 hover:bg-pink-700 cursor-pointer">
            <a href="transactions" className="block">Transactions</a>
          </li>
          <li className="py-2 px-4 hover:bg-pink-700 cursor-pointer fixed bottom-5">
            <a href="">Logout</a>
          </li>
        </ul>
      </aside>

      {/* Sidebar (Mobile - Modal) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="bg-gray-800 dark:bg-gray-950 w-64 h-full fixed top-0 left-0 p-4 flex flex-col z-30 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoClose size={24} />
            </button>
            <ul className="h-full overflow-y-auto">
              <li className="py-2 px-4 hover:bg-pink-700 cursor-pointer">
                <a href="dashboard" className="block">Dashboard</a>
              </li>
              <li className="py-2 px-4 hover:bg-pink-700 cursor-pointer">
                <a href="managecontest" className="block">Manage Contest</a>
              </li>
              <li className="py-2 px-4 hover:bg-pink-700 cursor-pointer">
                <a href="product" className="block">Products</a>
              </li>
              <li className="py-2 px-4 hover:bg-pink-700 cursor-pointer">
                <a href="order" className="block">Orders</a>
              </li>
              <li className="py-2 px-4 hover:bg-pink-700 cursor-pointer">
                <a href="whatsapp" className="block">Whatsapp</a>
              </li>
              <li className="py-2 px-4 hover:bg-pink-700 mt-auto cursor-pointer">
                <a href="" className="block">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-4 md:p-4 ml-0 md:ml-64 h-[calc(100vh-4rem)] overflow-y-auto mt-15">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300 p-4 text-center">
        Admin Footer © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
