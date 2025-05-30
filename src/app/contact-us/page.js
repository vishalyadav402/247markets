import React from 'react'
import ClientLayout from '../ClientLayout'
import Link from 'next/link'
import { RxSlash } from "react-icons/rx";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const page = () => {
  return (
    <ClientLayout>
        <div className='px-4 md:max-w-7xl mx-auto items-center mb-5 md:mb-10 mt-5'>
     <nav className="flex items-center space-x-2 text-gray-900 text-sm mb-3">
      <Link href="/" className="font-normal">
        Home
      </Link>
      <RxSlash/>
      <Link href="/contact-us" className="text-red-500">
        Contact us
      </Link>
    </nav>
      <div className='flex md:justify-center'>
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900">CONTACT US</h2>
      </div>
      </div>
      <hr className="text-gray-200"/> 


      <section className="max-w-7xl min-h-[60vh] mx-auto px-4 py-12 text-center">
      {/* Heading */}
      <h2 className="text-lg md:text-xl font-bold text-[#1A1541] mb-10">
        We are always happy to hear from you. Please contact us if<br className="hidden md:block" />
        you have any questions or concerns.
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Phone */}
        <div className="border rounded-2xl p-6 flex flex-col items-center space-y-3">
          <FiPhone className="text-3xl text-black" />
          <p>Customer Support</p>
          <a href="tel:+97143562424" className="text-red-500 font-medium">
            +971 4 356 2424
          </a>
        </div>

        {/* Address */}
        <div className="border rounded-2xl p-6 flex flex-col items-center space-y-3">
          <FiMapPin className="text-3xl text-black" />
          <p className="leading-6">
            247 Marketing PVT. LTD. <br />
            deoria, Gorakhpur, India
          </p>
        </div>

        {/* Email */}
        <div className="border rounded-2xl p-6 flex flex-col items-center space-y-3">
          <FiMail className="text-3xl text-black" />
          <p>
            Or you can email your queries and<br /> suggestions to us at:
          </p>
          <a
            href="mailto:support@247marketing.com"
            className="text-red-500 font-medium break-words"
          >
            support@247marketing.com
          </a>
        </div>
      </div>
    </section>
      </ClientLayout>
  )
}

export default page