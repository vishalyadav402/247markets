"use client";
import React from "react";
import ClientLayout from "../ClientLayout";
import { RxSlash } from "react-icons/rx";
import Link from "next/link";
import { FaGift } from "react-icons/fa";

const PromotionsPage = () => {
  return (
    <ClientLayout>
      <div className="px-4 md:max-w-[85rem] mx-auto mb-10 mt-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-gray-900 text-sm mb-4">
          <Link href="/" className="font-normal">Home</Link>
          <RxSlash />
          <span className="text-red-500">Promotions</span>
        </nav>

        {/* Header */}
        <div className="flex md:justify-center mb-6">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900 uppercase">Promotions</h2>
        </div>
        <hr className="mb-6 border-gray-300" />

        {/* Promo Content */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 text-center shadow-sm">
          <FaGift className="mx-auto text-5xl text-yellow-600 mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            Referral Program
          </h3>
          <p className="text-gray-600 mb-4">
            ✨ We're currently running a Refer & Earn program!
Share your referral code with others to invite them to join and make purchases.
You’ll earn a fixed commission on every purchase made by your referrals — even better, the commission is distributed across 10 levels deep in your referral network.
          </p>
          <Link
            href="/refer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-full transition"
          >
            Refer & Earn Now
          </Link>
        </div>
      </div>
    </ClientLayout>
  );
};

export default PromotionsPage;
