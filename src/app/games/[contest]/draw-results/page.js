"use client"
import ClientLayout from '@/app/ClientLayout'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { RxSlash } from "react-icons/rx";
import { useState } from "react";
import GameSelectModal from '@/app/component/GameSelectModal';
import NextDrawBanner from '@/app/component/NextDrawBanner';


const Page = () => {

const params = useParams();
  
const [modalOpen, setModalOpen] = useState(true); // show initially or based on some action

const handleGameSelect = (game) => {
  console.log("Selected Game:", game);
  // navigate or update state as needed
};

const [fromDate, setFromDate] = useState("");
const [toDate, setToDate] = useState(new Date().toISOString().split("T")[0]);
 
const allDraws = [
  {
    date: "13 Jun 2025",
    combination: [23, 10, 16, 38, 36, 37],
    winners: 755,
    prize: "Rupee 84,500"
  },
  {
    date: "06 Jun 2025",
    combination: [37, 36, 1, 7, 19, 8],
    winners: 911,
    prize: "Rupee 235,226"
  },
  {
    date: "30 May 2025",
    combination: [14, 16, 8, 19, 35, 30],
    winners: 1129,
    prize: "Rupee 236,069"
  },
];

const filteredDraws = allDraws.filter(draw => {
  const drawDate = new Date(draw.date);
  const from = fromDate ? new Date(fromDate) : null;
  const to = toDate ? new Date(toDate) : null;
  return (!from || drawDate >= from) && (!to || drawDate <= to);
});

const router = useRouter();
const pathname = usePathname();


  const handleClick = () => {
    const segments = pathname.split('/'); // ['','games','FAST5','draw-results']
    segments[segments.length - 1] = 'draw-results-all'; // Replace last node
    const newPath = segments.join('/'); // '/games/FAST5/draw-results-all'
    router.push(newPath);
  };

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
      <span className="text-red-500">
        Draw Results
      </span>
    </nav>
      <div className='flex md:justify-center mb-6'>
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900 uppercase">Past Draw Results</h2>
      </div>

             
    <hr className="text-gray-300"/>

{/* result */}
        {/* <button className='bg-red-200' onClick={() => setModalOpen(true)}>Choose Game</button> */}

      <GameSelectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={handleGameSelect}
      />



    {/* design here */}

<div className='md:px-28 gap-4 my-4 md:my-8'>

{/* Search by Date */}
<div className="text-center my-6">
  <p className="text-sm font-semibold text-[#2b2b2b] uppercase tracking-wide mb-2">
    SEARCH DRAWINGS BY DATE
  </p>

<div className="inline-flex items-center border border-green-500 rounded-full px-4 py-2 text-sm font-medium text-gray-800">
  {/* From Date (click to open calendar, shows 'from' placeholder) */}
  <input
    type="date"
    value={fromDate}
    onChange={(e) => setFromDate(e.target.value)}
    className={`bg-transparent outline-none border-none cursor-pointer ${
      fromDate ? "text-black font-bold" : "text-gray-400"
    }`}
    placeholder="From"
    max={toDate || new Date().toISOString().split("T")[0]}
    onFocus={(e) => e.currentTarget.showPicker && e.currentTarget.showPicker()} // triggers calendar on click in supporting browsers
    style={{ appearance: "none" }}
  />

  {/* Dash */}
  <span className="mx-2 text-gray-500 text-xl font-semibold">—</span>

  {/* To Date (shows selected or today by default, also editable) */}
  <input
    type="date"
    value={toDate}
    onChange={(e) => setToDate(e.target.value)}
    className="bg-transparent outline-none border-none cursor-pointer text-black font-bold"
    min={fromDate}
    max={new Date().toISOString().split("T")[0]}
    onFocus={(e) => e.currentTarget.showPicker && e.currentTarget.showPicker()}
    style={{ appearance: "none" }}
  />
</div>
</div>

{/* Guaranteed Winners Banner */}

{/* <div className="bg-[#1b1741] text-white rounded-2xl px-6 py-8 text-center max-w-3xl mx-auto mb-10 relative overflow-hidden">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
    VIEW OUR <span className="text-white">7</span> GUARANTEED WINNERS
  </h2>
  <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300 text-sm">
    VIEW LATEST WINNERS
  </button>
</div> */}


  <div className="grid gap-6 md:grid-cols-3 mt-6">
    {filteredDraws.length > 0 ? (
      filteredDraws.map((draw, index) => (
        <div key={index} onClick={()=>router.push(`${pathname}/${draw.date.replace(/\s/g, '')}`)} className="bg-white text-[#1b1741] text-center rounded-3xl hover:cursor-pointer shadow-lg p-6">
          <div className="bg-[#1b1741] py-4 rounded-lg text-white">
            <h3 className="text-lg font-bold mb-1">MAIN DRAW RESULTS</h3>
            <p className="text-sm mb-4">{draw.date}</p>
          </div>
          <div className="my-4">
            <p className="text-sm font-semibold mb-1">Winning Combination:</p>
            <div className="flex flex-wrap gap-2 items-center justify-center bg-green-600 rounded-4xl py-3 px-5">
              {draw.combination.map((num, i) => (
                <div key={i} className="w-8 h-8 flex items-center justify-center bg-white text-[#1b1741] rounded-full font-bold">
                  {num}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm mb-1 font-semibold">Total Winners: <span className="text-green-400 font-semibold">{draw.winners}</span></p>
          <p className="text-sm mb-4 font-semibold">Total Prizes: <span className="text-green-400 font-semibold">{draw.prize}</span></p>
          <button className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 text-sm font-semibold rounded-4xl">
            VIEW DETAILED RESULTS
          </button>
        </div>
      ))
    ) : (
      <p className="col-span-full text-center text-gray-600 mt-4">No draws found in selected date range.</p>
    )}
  </div>


<div className='flex items-center justify-center my-10'>
     <button onClick={()=>handleClick()} className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 text-lg font-semibold rounded-4xl">
      VIEW ALL DRAW HISTORY
    </button>
</div>

</div>
    </div>


        </ClientLayout>
    </>
  )
}

export default Page







