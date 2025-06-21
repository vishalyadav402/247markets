import React from 'react'
import ClientLayout from '../ClientLayout'
import { RxSlash } from "react-icons/rx";
import Link from 'next/link'
import Image from 'next/image';

const page = () => {
  return (
    <ClientLayout>
        <div className='px-4 md:max-w-[85rem] mx-auto items-center mb-5 md:mb-10 mt-5'>
     <nav className="flex items-center space-x-2 text-gray-900 text-sm mb-3">
      <Link href="/" className="font-normal">
        Home
      </Link>
      <RxSlash/>
      <span className="text-red-500">
        Giving Back
      </span>
    </nav>
      <div className='flex md:justify-center mb-6'>
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900 uppercase">Giving Back</h2>
      </div>
    <hr className="text-gray-300"/>

<section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* Left Box */}
      <div className="bg-[#1A1541] text-white h-full rounded-2xl p-8 text-center space-y-6 flex flex-col justify-center items-center">
        <Image
          src="/247-pencil.png"
          alt="247 Marketing"
          className="mx-auto h-50"
          height={100} width={100}
          style={{height:'auto',width:'40rem'}}
        />
        <h2 className="text-4xl font-semibold leading-snug">
          FOR A BETTER <br /> TOMORROW
        </h2>
      </div>

      {/* Right Content */}
     
  <div className="space-y-6">
    <div>
      <h3 className="text-2xl font-bold text-[#1A1541] mb-2">Empowering Right to Education</h3>
      <p>
        Education is the cornerstone of progress and personal empowerment. We are deeply passionate about ensuring that every individual, regardless of their background, has access to quality learning opportunities. Through our regular campaigns, we actively support initiatives that:
      </p>
      <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
        <li>Provide educational resources and materials to underprivileged students.</li>
        <li>Fund scholarships and grants for aspiring learners.</li>
        <li>Support digital literacy programs in underserved areas.</li>
        <li>Contribute to building and improving educational infrastructure.</li>
      </ul>
      <p className="mt-3">
        We believe that by investing in education, we are nurturing the innovators, leaders, and problem-solvers of tomorrow.
      </p>
    </div>
   
  </div>

    </section>
    </div>
    </ClientLayout>
  )
}

export default page