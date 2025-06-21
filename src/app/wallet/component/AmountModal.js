// ./component/AmountModal.jsx
import React, { useState } from "react";

const AmountModal = ({ onClose, onSubmit, type = "topup", max }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0 || (type === "withdraw" && value > max)) {
      alert(type === "withdraw" ? `Enter valid amount ≤ ₹${max}` : "Enter a valid amount");
      return;
    }
    onSubmit(value);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-start">
          {type === "topup" ? "Top Up Wallet" : "Withdraw Funds"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter amount"
            min={1}
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1 rounded bg-[#1a1541] text-white hover:bg-[#281f7a]"
            >
              {type === "topup" ? "Top Up" : "Withdraw"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AmountModal;
