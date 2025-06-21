import React, { useState } from "react";

const BankDetailsModal = ({ onSave, onClose }) => {
  const [method, setMethod] = useState("upi"); // "upi" or "bank"
  const [upiId, setUpiId] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [errors, setErrors] = useState({});

  const validateUPI = (upi) => {
    const upiRegex = /^[\w.-]+@[\w.-]+$/;
    return upiRegex.test(upi);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (method === "upi") {
      if (!validateUPI(upiId)) newErrors.upiId = "Enter a valid UPI ID (example@bank)";
    } else {
      if (!bankName) newErrors.bankName = "Bank name is required";
      if (!accountHolder) newErrors.accountHolder = "Account holder name is required";
      if (!accountNumber) newErrors.accountNumber = "Account number is required";
      if (!ifscCode) newErrors.ifscCode = "IFSC code is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (method === "upi") {
        onSave({ method, upiId });
      } else {
        onSave({ method, bankName, accountHolder, accountNumber, ifscCode });
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-96 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Add Bank / UPI Details</h3>

        <div className="flex gap-4 mb-4">
          <button
            className={`px-3 py-1 rounded ${
              method === "upi" ? "bg-[#1a1541] text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setMethod("upi");
              setErrors({});
            }}
          >
            UPI
          </button>
          <button
            className={`px-3 py-1 rounded ${
              method === "bank" ? "bg-[#1a1541] text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setMethod("bank");
              setErrors({});
            }}
          >
            Bank Details
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {method === "upi" ? (
            <div>
              <label className="block text-sm font-medium mb-1">
                UPI ID
              </label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className={`w-full border rounded px-3 py-1 ${
                  errors.upiId ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="example@upi"
              />
              {errors.upiId && (
                <p className="text-red-600 text-sm mt-1">{errors.upiId}</p>
              )}
            </div>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Bank Name
                </label>
                <input
                  type="text"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  className={`w-full border rounded px-3 py-1 ${
                    errors.bankName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="HDFC, SBI, etc."
                />
                {errors.bankName && (
                  <p className="text-red-600 text-sm mt-1">{errors.bankName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  value={accountHolder}
                  onChange={(e) => setAccountHolder(e.target.value)}
                  className={`w-full border rounded px-3 py-1 ${
                    errors.accountHolder ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your full name"
                />
                {errors.accountHolder && (
                  <p className="text-red-600 text-sm mt-1">{errors.accountHolder}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Account Number
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className={`w-full border rounded px-3 py-1 ${
                    errors.accountNumber ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="1234567890"
                />
                {errors.accountNumber && (
                  <p className="text-red-600 text-sm mt-1">{errors.accountNumber}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  IFSC Code
                </label>
                <input
                  type="text"
                  value={ifscCode}
                  onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
                  className={`w-full border rounded px-3 py-1 uppercase ${
                    errors.ifscCode ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="SBIN0000001"
                />
                {errors.ifscCode && (
                  <p className="text-red-600 text-sm mt-1">{errors.ifscCode}</p>
                )}
              </div>
            </>
          )}

          <div className="flex justify-end space-x-2 pt-2">
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankDetailsModal;
