import React, { useState, useMemo, useRef, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const TransactionList = ({ transactions }) => {
  const [filter, setFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(5);
  const containerRef = useRef();

  const filterByType = useMemo(() => {
    return filter === "all"
      ? transactions
      : transactions.filter((tx) => tx.type === filter);
  }, [filter, transactions]);

  const filterByDate = useMemo(() => {
    const now = new Date();
    if (dateFilter === "7days") {
      return filterByType.filter((tx) => {
        const txDate = new Date(tx.date);
        return now - txDate <= 7 * 86400000;
      });
    }
    if (dateFilter === "month") {
      return filterByType.filter((tx) => {
        const txDate = new Date(tx.date);
        return (
          txDate.getMonth() === now.getMonth() &&
          txDate.getFullYear() === now.getFullYear()
        );
      });
    }
    return filterByType;
  }, [dateFilter, filterByType]);

  const handleScroll = () => {
    if (
      containerRef.current &&
      containerRef.current.scrollHeight - containerRef.current.scrollTop <=
        containerRef.current.clientHeight + 50
    ) {
      setVisibleCount((prev) => prev + 5);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const visibleTx = useMemo(() => {
    return filterByDate.slice(0, visibleCount);
  }, [visibleCount, filterByDate]);

  const exportCSV = () => {
    const rows = [["Date", "Type", "Amount"]];
    filterByDate.forEach((tx) =>
      rows.push([tx.date, tx.type, tx.amount.toString()])
    );
    const csvContent =
      "data:text/csv;charset=utf-8," +
      rows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "transactions.csv";
    a.click();
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
        <div className="flex space-x-2 text-sm">
          {["all", "deposit", "withdraw"].map((t) => (
            <button
              key={t}
              onClick={() => {
                setFilter(t);
                setVisibleCount(5);
              }}
              className={`px-3 py-1 rounded ${
                filter === t ? "bg-[#281f7a] text-white" : "bg-gray-200"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex space-x-2 text-sm">
          {[
            { label: "All Time", value: "all" },
            { label: "Last 7 Days", value: "7days" },
            { label: "This Month", value: "month" },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setDateFilter(opt.value);
                setVisibleCount(5);
              }}
              className={`px-3 py-1 rounded ${
                dateFilter === opt.value ? "bg-green-600 text-white" : "bg-gray-200"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <button
          onClick={exportCSV}
          className="text-sm px-3 py-1 bg-gray-800 text-white rounded"
        >
          Export CSV
        </button>
      </div>

      <div
        ref={containerRef}
        className="max-h-80 overflow-y-auto pr-1 py-2 space-y-3 rounded-lg px-0"
      >
        {visibleTx.length === 0 ? (
          <div className="text-center text-gray-500">No transactions found</div>
        ) : (
          visibleTx.map((tx) => (
            <div
              key={tx.id}
              className={`flex items-center justify-between p-3 border rounded-lg shadow-sm ${
                tx.type === "deposit" ? "border-green-300" : "border-red-300"
              }`}
            >
              <div className="flex items-center gap-2">
                {tx.type === "deposit" ? (
                  <FaArrowDown className="text-green-600" />
                ) : (
                  <FaArrowUp className="text-red-600" />
                )}
                <div>
                  <p className="capitalize font-medium">{tx.type}</p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
              </div>
              <span
                className={`font-semibold ${
                  tx.type === "deposit" ? "text-green-600" : "text-red-600"
                }`}
              >
                ₹{tx.amount}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionList;
