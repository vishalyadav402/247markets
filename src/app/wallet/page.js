"use client";
import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import BankDetailsModal from "./component/BankDetailsModal";
import TransactionList from "./component/TransactionList";
import ClientLayout from "../ClientLayout";
import AmountModal from "./component/AmountModal";

const WalletPage = () => {
  const [balance, setBalance] = useState(2500);
  const [transactions, setTransactions] = useState([]);
  const [bankDetails, setBankDetails] = useState(null);
  const [showBankModal, setShowBankModal] = useState(false);

  const [showTopUpModal, setShowTopUpModal] = useState(false);
const [showWithdrawModal, setShowWithdrawModal] = useState(false);


  useEffect(() => {
    // Dummy 12 transactions
    const dummy = Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      type: i % 2 === 0 ? "deposit" : "withdraw",
      amount: 100 + i * 50,
      date: new Date(Date.now() - i * 86400000).toISOString().split("T")[0], // last i days
    }));
    setTransactions(dummy);
  }, []);

 const handleTopUp = (amount) => {
  setBalance(balance + amount);
  setTransactions([
    {
      id: Date.now(),
      type: "deposit",
      amount,
      date: new Date().toISOString().split("T")[0],
    },
    ...transactions,
  ]);
  setShowTopUpModal(false);
};


 const handleWithdraw = (amount) => {
  setBalance(balance - amount);
  setTransactions([
    {
      id: Date.now(),
      type: "withdraw",
      amount,
      date: new Date().toISOString().split("T")[0],
    },
    ...transactions,
  ]);
  setShowWithdrawModal(false);
};


  return (
    <ClientLayout>
    <div className="max-w-xl mx-auto p-4 my-10">
      <h2 className="text-2xl text-center font-bold mb-4">My Wallet</h2>

      <div className="bg-white shadow rounded-xl p-4 flex items-center justify-between mb-4">
        <div>
          <p className="text-gray-500 text-sm">Wallet Balance</p>
          <h3 className="text-3xl font-semibold text-green-600">₹{balance}</h3>
        </div>
        <button
  onClick={() => setShowTopUpModal(true)}
  className="bg-[#281f7a] hover:bg-[#1a1541] text-white px-4 py-2 rounded flex items-center"
>
  <FaPlusCircle className="mr-2" /> Top Up
</button>
      </div>

     <button
  onClick={() => {
    if (!bankDetails) return setShowBankModal(true);
    setShowWithdrawModal(true);
  }}
  className="bg-[#ff0505] hover:bg-[#f23333] text-white px-4 py-2 rounded w-full mb-6"
>
  Withdraw to Bank
</button>

      <TransactionList transactions={transactions} />

      {showBankModal && (
        <BankDetailsModal
          onSave={(details) => {
            setBankDetails(details);
            setShowBankModal(false);
          }}
          onClose={() => setShowBankModal(false)}
        />
      )}
    </div>





    {showTopUpModal && (
  <AmountModal
    type="topup"
    onSubmit={handleTopUp}
    onClose={() => setShowTopUpModal(false)}
  />
)}

{showWithdrawModal && (
  <AmountModal
    type="withdraw"
    max={balance}
    onSubmit={handleWithdraw}
    onClose={() => setShowWithdrawModal(false)}
  />
)}


    </ClientLayout>
  );
};

export default WalletPage;
