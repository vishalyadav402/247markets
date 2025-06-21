"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrSync } from "react-icons/gr";
// will take this from url params
const TICKET_COST = 231.73;
const REQUIRED_NUMBERS = 3;



const NumberSelectionGame = () => {
  const [tickets, setTickets] = useState([{ id: 1, numbers: [], multiplier: 1 }]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage after mount
  useEffect(() => {
    const stored = localStorage.getItem("tickets");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setTickets(parsed);
        }
      } catch (e) {
        console.error("Failed to parse stored tickets:", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save valid tickets to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    const validTickets = tickets.filter(t => t.numbers.length === REQUIRED_NUMBERS);
    localStorage.setItem("tickets", JSON.stringify(validTickets));
  }, [tickets, isLoaded]);

  const toggleNumber = (ticketId, number) => {
    setTickets(prev =>
      prev.map(ticket => {
        if (ticket.id !== ticketId) return ticket;

        const isSelected = ticket.numbers.includes(number);
        let newNumbers;

        if (isSelected) {
          newNumbers = ticket.numbers.filter(n => n !== number);
        } else if (ticket.numbers.length < REQUIRED_NUMBERS) {
          newNumbers = [...ticket.numbers, number];
        } else {
          newNumbers = ticket.numbers;
        }

        return { ...ticket, numbers: newNumbers };
      })
    );
  };

  const changeMultiplier = (ticketId, increase) => {
    setTickets(prev =>
      prev.map(ticket =>
        ticket.id === ticketId
          ? {
              ...ticket,
              multiplier: Math.max(1, increase ? ticket.multiplier + 1 : ticket.multiplier - 1),
            }
          : ticket
      )
    );
  };

  const addTicket = () => {
    const newId = tickets.length > 0 ? Math.max(...tickets.map(t => t.id)) + 1 : 1;
    setTickets([...tickets, { id: newId, numbers: [], multiplier: 1 }]);
  };

  const removeTicket = ticketId => {
    setTickets(prev => prev.filter(ticket => ticket.id !== ticketId));
  };

  const resetTicketNumbers = ticketId => {
    const getRandomNumbers = () => {
      const all = Array.from({ length: 20 }, (_, i) => i + 1);
      for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
      }
      return all.slice(0, REQUIRED_NUMBERS);
    };

    setTickets(prev =>
      prev.map(ticket =>
        ticket.id === ticketId ? { ...ticket, numbers: getRandomNumbers() } : ticket
      )
    );
  };

  const totalSubtotal = tickets
    .filter(t => t.numbers.length === REQUIRED_NUMBERS)
    .reduce((sum, ticket) => sum + ticket.multiplier * TICKET_COST, 0)
    .toFixed(2);

  const canAddToCart = tickets.some(t => t.numbers.length === REQUIRED_NUMBERS);

// get date time current
 const getFormattedDateTime = () => {
  // Get current UTC time
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;

  // Add 5 hours 30 minutes for IST
  const istTime = new Date(utc + (5.5 * 60 * 60 * 1000));

  const day = istTime.getDate().toString().padStart(2, "0");
  const month = istTime.toLocaleString("en-US", { month: "short" });
  const year = istTime.getFullYear().toString().slice(-2);

  let hours = istTime.getHours();
  const isPM = hours >= 12;
  const displayHours = ((hours + 11) % 12) + 1;

  return `${day}-${month}-${year} ${displayHours} ${isPM ? "PM" : "AM"} IST`;
};

  return (
    <div className="py-6 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
       
        <div className="md:col-span-3">
          <h1 className="font-bold text-2xl">₹231.73 PER PENCIL FOR ONE ENTRY</h1>
          <div className="w-full">
            <Image
                src="/247-pencil.png"
                alt="Pencil"
                width={500}         // or the original width of the image
                height={40}         // adjust based on the image height
                className="h-auto object-contain"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {tickets.map((ticket, idx) => {
              const isActive = ticket.numbers.length === REQUIRED_NUMBERS;

              return (
                  <div
                    key={ticket.id}
                    className={`w-[280px] h-[340px] mb-5 rounded-xl p-4 border-2 transition shadow-md flex flex-col items-center relative ${
                      isActive ? "border-orange-500" : "border-gray-200 text-gray-400"
                    }`}
                  >
                    {/* Header */}
                    <div className="w-full flex flex-col items-center mb-4">
                      <div className="w-full flex justify-between items-center">
                        <span className="font-semibold">TICKET {idx + 1}</span>
                        <div className="flex items-center gap-2">
                          <GrSync
                          fontSize={22}
                            onClick={() => resetTicketNumbers(ticket.id)}
                            className="cursor-pointer text-gray-400 hover:text-black"
                          />
                          <RiDeleteBin5Line 
                          fontSize={22}
                            onClick={() => tickets.length > 1 && removeTicket(ticket.id)}
                            className={`${
                              tickets.length > 1
                                ? "cursor-pointer text-gray-400 hover:text-red-500"
                                : "cursor-not-allowed text-gray-300"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Selected Numbers */}
                      <div className="flex gap-2 mt-2">
                        {[0, 1, 2].map(i => {
                          const value = ticket.numbers[i] !== undefined ? ticket.numbers[i] : "?";
                          const isPlaceholder = value === "?";
                          return (
                            <div
                              key={i}
                              className={`w-8 h-8 rounded-full text-sm flex items-center justify-center font-semibold ${
                                isPlaceholder ? "bg-gray-200 text-gray-500 border border-orange-500" : "bg-orange-500 text-white"
                              }`}
                            >
                              {value}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Number Selector */}
                    <div className="grid grid-cols-7 gap-2 mb-4">
                      {[...Array(20)].map((_, index) => {
                        const number = index + 1;
                        const selected = ticket.numbers.includes(number);
                        const isDisabled = ticket.numbers.length >= REQUIRED_NUMBERS && !selected;
                        return (
                          <button
                            key={number}
                            onClick={() => toggleNumber(ticket.id, number)}
                            className={`rounded-full w-8 h-8 text-sm font-medium transition ${
                              selected
                                ? "bg-orange-500 text-white"
                                : "border border-orange-500 text-orange-500"
                            } ${isDisabled ? "opacity-40 cursor-not-allowed" : ""}`}
                            disabled={isDisabled}
                          >
                            {number}
                          </button>
                        );
                      })}
                    </div>

                    {/* Multiplier & Cost */}
                    <div className="w-full">
                      <div className="text-sm text-black font-semibold mb-1">
                        Multiply your entry value from 1 to 1,000
                      </div>
                      <div className="grid grid-cols-2 items-center text-left space-x-4 mb-2">
                        <div>
                          <div className="px-4 w-18 py-1 rounded bg-orange-500 text-white font-semibold text-sm">
                            × {ticket.multiplier}
                          </div>
                        </div>
                        <div className="flex flex-col justify-end">
                          <div className="text-md font-semibold">
                            Pay: ₹{(ticket.multiplier * TICKET_COST).toFixed(2)}
                          </div>
                          <div className="text-sm text-orange-500 font-semibold">
                            Win: ₹{(ticket.multiplier * 11586.44).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              );
            })}

            {/* Add Ticket Button */}
              <button
                onClick={addTicket}
                className="border-2 w-[280px] h-[340px] border-dashed border-orange-300 rounded-xl flex items-center justify-center p-6 text-orange-300 font-semibold hover:bg-orange-50 hover:border-orange-400 hover:text-orange-400 transition"
              >
                + ADD ANOTHER TICKET
              </button>
          </div>
        </div>

        {/* Footer Controls */}
        <div className="flex md:col-span-1 flex-col md:items-center space-y-3 mt-10">
          <div className="flex items-center md:justify-center space-x-4 mb-1">
            <button
              onClick={() => {
                if (tickets.length > 1) {
                  removeTicket(tickets[tickets.length - 1].id);
                }
              }}
              className="w-10 h-10 rounded-full border-2 border-black text-black text-xl font-bold flex items-center justify-center"
            >
              –
            </button>
            <div className="w-10 h-10 rounded-full bg-orange-500 text-white text-lg font-bold flex items-center justify-center">
              {tickets.filter(t => t.numbers.length === REQUIRED_NUMBERS).length}
            </div>
            <button
              onClick={addTicket}
              className="w-10 h-10 rounded-full border-2 border-black text-black text-xl font-bold flex items-center justify-center"
            >
              +
            </button>
          </div>

          <div className="text-lg font-semibold">Subtotal ₹{totalSubtotal}</div>

          <button
            className={`w-60 py-3 rounded-full text-white font-semibold text-sm transition ${
              canAddToCart ? "bg-orange-500 hover:bg-orange-600" : "bg-[#DDC8B6] cursor-not-allowed"
            }`}
            disabled={!canAddToCart}
          >
            ADD TO CART
          </button>

          <div className="text-sm text-black mt-2 md:text-center font-medium">
            Play for the draw on <br />
            <strong>{getFormattedDateTime()}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberSelectionGame;
