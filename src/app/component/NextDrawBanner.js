import React from 'react'

const NextDrawBanner = ({params}) => {
  return (
    <>
        <div className="bg-gradient-to-b from-orange-400 to-orange-700 text-white">
        {/* Top Content */}
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-center md:text-left">
          {/* Left Logo and Coral */}
          <div className="flex items-center justify-center md:justify-start space-x-4">
            {/* Coral SVG/placeholder image */}
            {/* <img src="/coral-left.png" alt="Coral" className="h-12 hidden md:block" /> */}
            <h1 className="text-4xl font-extrabold">{params.contest}</h1>
          </div>

          {/* Center: Countdown and Draw Info */}
          <div className='text-center'>
            <h2 className="text-2xl font-bold">NEXT DRAW</h2>
            <p className="text-md font-bold mb-2">Tuesday, 27 May 2025</p>
            <div className="flex justify-center space-x-2 font-bold text-orange-600">
              <div className="bg-white px-3 py-1 rounded text-lg">
                <span className="block text-2xl">01</span>
                <span className="text-xs font-semibold">MINUTE</span>
              </div>
              <div className="bg-white px-3 py-1 rounded text-lg">
                <span className="block text-2xl">52</span>
                <span className="text-xs font-semibold">SECONDS</span>
              </div>
            </div>
          </div>

          {/* Right: Prize Info */}
          <div className="flex flex-col items-center md:items-center">
            <p className="text-sm font-medium uppercase">PRIZE UP TO</p>
            <h2 className="text-3xl font-bold">₹11,624,279</h2>
            <h3>WIN</h3>
            <p className="mt-1 text-sm font-semibold"><span className="text-xl font-bold">50x</span> YOUR ENTRY VALUE</p>
            {/* Coral image (right) */}
            {/* <img src="/coral-right.png" alt="Coral" className="h-12 hidden md:block mt-2" /> */}
          </div>
        </div>

        {/* Bottom Menu Bar */}
        <div className="bg-orange-500 py-3 text-white text-sm font-semibold">
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex flex-wrap justify-center gap-6">
              <li className="cursor-pointer hover:underline">Buy Now</li>
              <li className="cursor-pointer hover:underline">Scan Coupon</li>
              <li className="cursor-pointer hover:underline">How to Play</li>
              <li className="cursor-pointer hover:underline">Past Results</li>
              <li className="cursor-pointer hover:underline">Winners</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NextDrawBanner