import React from 'react'
import ClientLayout from '../ClientLayout'
import Link from 'next/link'
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
      <Link href="/play-responsibly" className="text-red-500">
        Play-Responsibly
      </Link>
    </nav>
      <div className='flex md:justify-center'>
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900">PARTICIPATE RESPONSIBLY</h2>
      </div>
      </div>
      <hr className="text-gray-200"/> 


      <section className="max-w-7xl mx-auto px-4 py-12  gap-10 items-center">
  <div>
    <h2 className="text-2xl font-bold text-[#1A1541] mb-2">247 Marketing – Participate Responsibly</h2>
    <p>
      At <strong>247 Marketing</strong>, we believe in providing a fun, fair, and responsible environment for everyone.
      Our goal is to create skill-based experiences that promote smart participation while protecting and empowering our community.
    </p>
  </div>

  <div className='my-5'>
    <h3 className="text-xl font-semibold text-[#1A1541] mb-1">Our Commitment</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>
        Age Verification: We are committed to preventing underage access. Only users aged 18 and above can participate after completing identity verification.
      </li>
      <li>
        Platform Design: Our contests are created to ensure transparency, fairness, and a balanced level of excitement — with low-risk, skill-driven formats.
      </li>
    </ul>
  </div>

  <div>
    <h3 className="text-xl font-semibold text-[#1A1541] mb-1">Smart Participation System</h3>
    <p>
      We encourage our users to stay informed and in control of their activity. Our platform includes features to promote responsible engagement.
    </p>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li>
        Participation History: Every user can view their full participation and transaction history through their dashboard.
      </li>
      <li>
        Awareness Campaigns: 247 Marketing regularly promotes responsible play tips and updates via email and social media.
      </li>
    </ul>
  </div>

  <div>
    <p className="italic text-sm text-gray-600">
      Note: 247 Marketing operates within all legal frameworks and offers entertainment-only skill-based contests. No betting, gambling, or chance-based elements are involved.
    </p>
  </div>
</section>


    </ClientLayout>
  )
}

export default page