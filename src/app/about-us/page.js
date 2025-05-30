import React from 'react'
import ClientLayout from "../ClientLayout";
import Link from "next/link";
import { RxSlash } from "react-icons/rx";

const page = () => {
  return (
    <ClientLayout>
      <div className='px-4 md:max-w-7xl mx-auto items-center mb-5 md:mb-10 mt-5'>
     <nav className="flex items-center space-x-2 text-gray-900 text-sm mb-3">
      <Link href="/" className="font-normal">
        Home
      </Link>
      <RxSlash/>
      <Link href="/about" className="text-red-500">
        About us
      </Link>
    </nav>
      <div className='flex md:justify-center'>
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900">ABOUT US</h2>
      </div>
      </div>
      <hr className="text-gray-200"/> 

      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* Left Box */}
      <div className="bg-[#1A1541] text-white h-full rounded-2xl p-8 text-center space-y-6 flex flex-col justify-center items-center">
        <img
          src="/247-marketing.png"
          alt="247 Marketing"
          className="mx-auto h-50"
        />
        <h2 className="text-4xl font-semibold leading-snug">
          FOR A BETTER <br /> TOMORROW
        </h2>
      </div>

      {/* Right Content */}
      <div className="text-[#333] space-y-6 text-[17px]">
  <p>
    <strong>247 Marketing</strong> is an engaging contest platform that allows users to participate in
    skill-based challenges and prediction games for a chance to win exciting prizes.
    Our platform blends entertainment, strategy, and reward — offering users a fun and transparent way to test
    their knowledge and instincts across various contests.
  </p>

  <div>
    <h3 className="text-xl font-bold text-[#1A1541] mb-1">Vision</h3>
    <p>
      To become a leading platform for skill-based digital contests, creating rewarding experiences and life-changing opportunities for our community.
    </p>
  </div>

  <div>
    <h3 className="text-xl font-bold text-[#1A1541] mb-1">Mission</h3>
    <p>
      Our mission is to deliver engaging and fair competitions that inspire users to participate,
      compete, and win. We aim to foster excitement and opportunity through responsible digital experiences
      grounded in integrity, creativity, and community impact.
    </p>
    <p className="mt-2">
      <strong>247 Marketing</strong> — Empowering everyday players to aim high and win big through trusted contests.
    </p>
  </div>
</div>

    </section>
 
    </ClientLayout>
  )
}

export default page