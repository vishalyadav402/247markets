"use client"
import ClientLayout from '@/app/ClientLayout'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { RxSlash } from "react-icons/rx";
import React from 'react'
import NextDrawBanner from '@/app/component/NextDrawBanner';

const Page = () => {

  const params = useParams();

  return (
    <>
      <ClientLayout>
       <NextDrawBanner params={params}/>

<div className='px-4 md:max-w-[85rem] mx-auto items-center mb-5 md:mb-10 mt-5'>
     <nav className="flex items-center space-x-2 text-gray-900 text-sm mb-3">
      <Link href="/" className="font-normal">
        Home
      </Link>
      <RxSlash/>
      <Link href="/games" className="text-red-500">
        Games
      </Link>
      <RxSlash/>
      <Link href={`/games/${params.contest}/enter-draw`} className="text-red-500">
        {params.contest}
      </Link>
      <RxSlash/>
      <Link href={`/games/${params.contest}/draw-results`} className="text-red-500">
        Draw Results
      </Link>
      <RxSlash/>
      <span className="text-red-500">
        {params.resultDate}
      </span>
    </nav>
      <div className='flex md:justify-center mb-6'>
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900 uppercase">Past Draw Results</h2>
      </div>

             
    <hr className="text-gray-300"/>

</div>
        </ClientLayout>
    </>
  )
}

export default Page







