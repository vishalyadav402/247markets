import AdminLayout from '@/app/AdminLayout';
import React from 'react';

const TransactionPage = () => {
  const transactions = [
    {
      id: 'TXN123456',
      name: 'Ravi Sharma',
      amount: 499.00,
      method: 'PhonePe',
      date: '2025-05-13 14:22',
      status: 'Success',
    },
    {
      id: 'TXN123457',
      name: 'Anjali Patel',
      amount: 250.00,
      method: 'UPI',
      date: '2025-05-12 10:35',
      status: 'Success',
    },
    {
      id: 'TXN123458',
      name: 'Amit Verma',
      amount: 799.00,
      method: 'PhonePe',
      date: '2025-05-11 18:10',
      status: 'Failed',
    },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Customer Transactions</h1>
        
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Transaction ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Customer Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Amount (₹)</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Payment Method</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((txn) => (
                <tr key={txn.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{txn.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{txn.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">₹{txn.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{txn.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{txn.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        txn.status === 'Success'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TransactionPage;
