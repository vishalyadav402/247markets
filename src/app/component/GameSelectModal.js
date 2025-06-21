"use client";

import games from "@/app/api/games.json"

import { useRouter } from "next/navigation";
import { RiCloseCircleLine } from "react-icons/ri";

export default function GameSelectModal({ open, onClose, onSelect }) {
    const router = useRouter();
  if (!open) return null;           // ❶ – keep DOM clean when hidden

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center overflow-y-auto px-4 py-10
                    bg-black/60 backdrop-blur-sm">                  
     {/* translucent backdrop */}
      {/* close button */}
      <button onClick={onClose} className="mb-6 rounded-full p-2 text-white/90 hover:text-white text-[3.5rem]">
       <RiCloseCircleLine />
      </button>

      {/* list of game cards */}
      <div className="w-full max-w-sm space-y-8">
        {games.map((g) => (
          <button
            key={g.id}
            tabIndex={0}
            onClick={() => {
              onSelect(g);         // lift selection to parent
              onClose();
            }}
            className={`relative block w-full rounded-2xl p-8 text-center text-white shadow-xl
                        transition-transform duration-200 hover:scale-[1.03] focus-visible:scale-[1.03]
                        ${g.bg}`} // dynamic colour
          >
            <h3 className="mb-0 text-3xl font-extrabold tracking-wide uppercase">{g.name}</h3>
            <p className="text-lg font-medium">{g.frequency}</p>
            {g.tagline && (
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider leading-snug">
                {g.tagline}
              </p>
            )}
            <p className="mb-6 text-4xl font-extrabold">₹ {g.prize}</p>

            {/* entry fee pill */}
            <div className="mx-auto mb-4 w-full max-w-[160px] rounded-full border border-white/80 py-1 text-xl font-bold">
              ₹ {g.entryFee}
            </div>

            {/* buy-now button look-alike */}
            <div onClick={() => router.push(`/games/${g.name}/enter-draw`)} className="mx-auto w-full max-w-[220px] rounded-full bg-white py-2 font-semibold text-slate-900">
              Buy Now
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
