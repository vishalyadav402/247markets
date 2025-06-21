"use client"
import ClientLayout from '@/app/ClientLayout'
import NextDrawBanner from '@/app/component/NextDrawBanner'
import Link from 'next/link'
import { RxSlash } from "react-icons/rx";
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

  const params = useParams();




   const results = [
    {
      drawDate: '13/06/2025 10:30 PM',
      totalPrizes: 'Rupee 84,500',
      winningNumbers: '23-10-16-38-36-37',
    },
    {
      drawDate: '06/06/2025 10:30 PM',
      totalPrizes: 'Rupee 235,226',
      winningNumbers: '37-36-1-7-19-8',
    },
    {
      drawDate: '30/05/2025 10:30 PM',
      totalPrizes: 'Rupee 236,069',
      winningNumbers: '14-16-8-19-35-30',
    },
    {
      drawDate: '23/05/2025 10:30 PM',
      totalPrizes: 'Rupee 236,426',
      winningNumbers: '33-23-14-10-5-15',
    },
    {
      drawDate: '16/05/2025 10:30 PM',
      totalPrizes: 'Rupee 235,508',
      winningNumbers: '11-23-34-29-30-18',
    },
    {
      drawDate: '09/05/2025 10:30 PM',
      totalPrizes: 'Rupee 236,380',
      winningNumbers: '19-23-4-11-31-12',
    },
    {
      drawDate: '02/05/2025 10:30 PM',
      totalPrizes: 'Rupee 235,485',
      winningNumbers: '1-9-17-13-24-8',
    },
    {
      drawDate: '25/04/2025 10:30 PM',
      totalPrizes: 'Rupee 234,230',
      winningNumbers: '37-32-35-6-31-4',
    },
    {
      drawDate: '18/04/2025 10:30 PM',
      totalPrizes: 'Rupee 235,051',
      winningNumbers: '30-10-21-24-32-38',
    },
    {
      drawDate: '11/04/2025 10:30 PM',
      totalPrizes: 'Rupee 235,063',
      winningNumbers: '30-39-34-14-11-13',
    },
    {
      drawDate: '04/04/2025 10:30 PM',
      totalPrizes: 'Rupee 234,895',
      winningNumbers: '32-18-1-28-10-2',
    },
    {
      drawDate: '28/03/2025 10:30 PM',
      totalPrizes: 'Rupee 237,099',
      winningNumbers: '23-24-32-27-12-20',
    },
  ];


  return (
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
      <span className="text-red-500">
        All Draw Results
      </span>
    </nav>
      <div className='flex md:justify-center mb-6'>
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900 uppercase">Past Draw Results</h2>
      </div>

             
    <hr className="text-gray-300"/>


<div className="flex justify-center p-4">
      <div className="w-full md:max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#1b1741] text-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Draw Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Total Prizes
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Winning Numbers
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Details
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Breakdown
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.drawDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.totalPrizes}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.winningNumbers}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900 cursor-pointer">
                  <a href="#" className="flex items-center">
                    Draw Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900 cursor-pointer">
                  <a href="#" className="flex items-center">
                    Prize breakdown
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    </div>
    </ClientLayout>
  )
}

export default page