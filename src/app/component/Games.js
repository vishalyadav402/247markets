"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const games = [
  {
    id: 'pick2',
    name: 'PICK2',
    entryFee: '10',
    frequency: 'Hourly',
    prize: '500,000',
    multiplier: '50x',
    color: 'bg-orange-500',
    nextDraw: { minutes: '31', seconds: '23' },
  },
  {
    id: 'mega7',
    name: 'MEGA7',
    entryFee: '50',
    frequency: 'Every Sunday',
    prize: '100,000,000',
    description: '8 GUARANTEED WINNERS',
    color: 'bg-red-600',
    nextDraw: { days: '03', hours: '14', minutes: '11', seconds: '23' },
  },
  {
    id: 'fast5',
    name: 'FAST5',
    entryFee: '25',
    frequency: 'Every Saturday',
    prize: '25,000',
    description: '6 GUARANTEED WINNERS',
    color: 'bg-blue-600',
    nextDraw: { days: '02', hours: '14', minutes: '11', seconds: '23' },
  },
  {
    id: 'easy6',
    name: 'EASY6',
    entryFee: '15',
    frequency: 'Every Friday',
    prize: '15,000,000',
    description: '7 GUARANTEED WINNERS',
    color: 'bg-green-600',
    nextDraw: { days: '01', hours: '14', minutes: '11', seconds: '23' },
  },
  {
    id: 'pick1',
    name: 'PICK1',
    entryFee: '5',
    frequency: 'Hourly',
    prize: '200,000',
    multiplier: '20x',
    color: 'bg-purple-600',
    nextDraw: { minutes: '31', seconds: '23' },
  },
];


const Games = () => {

    const router = useRouter();
    
  return (
    <div className="flex flex-nowrap justify-between gap-2 py-6 overflow-x-auto">
      {games.map((game) => (
        <div
          key={game.id}
          className={`${game.color} text-white w-[240px] flex-none p-6 rounded-lg shadow-lg flex flex-col justify-between`}
        >
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-white text-xl">{game.name}</span>
                <div className="flex text-white rounded-full border border-white overflow-hidden">
                    <span className="px-1 text-[0.8em] py-0.5 border-r border-white flex items-center bg-white text-black">
                    <FaRupeeSign className="text-xs" />
                    {game.entryFee}
                    </span>
                    <span className="px-1 py-0.5 text-[0.6em] flex items-center">{game.frequency}</span>
                </div>
                </div>

            <div className="mt-4">
              <p className="text-xs">PRIZE UP TO</p>
              <p className="text-2xl font-bold flex"><span className='self-center'><RiMoneyRupeeCircleFill /></span> {game.prize}</p>
              {game.multiplier && (
                <>
                  <p className="text-sm mt-2">WIN</p>
                  <p className="text-xl font-bold">{game.multiplier}</p>
                  <p className="text-sm">YOUR ENTRY VALUE</p>
                </>
              )}
              {game.description && (
                <p className="text-sm font-semibold mt-2">{game.description}</p>
              )}
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold">NEXT DRAW</p>
              <div className="flex gap-2 mt-1">
                {game.nextDraw.days && (
                  <div className="bg-white text-black text-center px-2 py-1 rounded">
                    <div className="text-md font-bold">{game.nextDraw.days}</div>
                    <div className="text-[0.5em] font-medium">DAYS</div>
                  </div>
                )}
                {game.nextDraw.hours && (
                  <div className="bg-white text-black text-center px-2 py-1 rounded">
                    <div className="text-md font-bold">{game.nextDraw.hours}</div>
                    <div className="text-[0.5em] font-medium">HOURS</div>
                  </div>
                )}
                {game.nextDraw.minutes && (
                  <div className="bg-white text-black text-center px-2 py-1 rounded">
                    <div className="text-md font-bold">{game.nextDraw.minutes}</div>
                    <div className="text-[0.5em] font-medium">MINUTES</div>
                  </div>
                )}
                {game.nextDraw.seconds && (
                  <div className="bg-white text-black text-center px-2 py-1 rounded">
                    <div className="text-md font-bold">{game.nextDraw.seconds}</div>
                    <div className="text-[0.5em] font-medium">SECONDS</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button onClick={() => router.push(`/games/${game.name}/enter-draw`)} className="mt-6 bg-white text-black font-bold py-2 rounded">
            BUY NOW
          </button>
        </div>
      ))}
    </div>
  );
};

export default Games;
