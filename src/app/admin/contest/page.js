"use client";
import AdminLayout from '@/app/AdminLayout';
import React, { useState } from 'react';

const ManageContestPage = () => {
  const contests = [
    { id: 1, name: 'Mega50', status: 'Active', participants: 120 },
    { id: 2, name: 'JackPot20', status: 'Inactive', participants: 80 },
  ];

  const [showModal, setShowModal] = useState(false);
  const [contestName, setContestName] = useState('');
  const [numberCount, setNumberCount] = useState('7');

  // ✅ New state variables
  const [contestNumber, setContestNumber] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [contestFee, setContestFee] = useState('');

  const handleCreateContest = () => {
    // ✅ Log all fields
    console.log('Creating contest:', {
      contestName,
      contestNumber,
      numberCount,
      startDate,
      endDate,
      contestFee,
    });

    // Reset modal state
    setShowModal(false);
    setContestName('');
    setContestNumber('');
    setNumberCount('7');
    setStartDate('');
    setEndDate('');
    setContestFee('');
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Manage Contests</h1>
          <button onClick={() => setShowModal(true)} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            + Add Contest
          </button>
        </div>

        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Contest Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Participants</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contests.map((contest) => (
                <tr key={contest.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{contest.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{contest.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        contest.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {contest.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{contest.participants}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 space-x-2">
                    <button className="text-blue-600 hover:underline">Edit</button>
                    <button className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-gray-800 backdrop-opacity-5 flex justify-center items-center">
          <div className="bg-white text-black rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-semibold mb-4">Create New Contest</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Contest Name</label>
              <input
                type="text"
                value={contestName}
                onChange={(e) => setContestName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter contest name"
              />
            </div>

            {/* ✅ New Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Contest Number</label>
              <input
                type="text"
                value={contestNumber}
                onChange={(e) => setContestNumber(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter contest number"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Number of Numbers to Choose</label>
              <select
                value={numberCount}
                onChange={(e) => setNumberCount(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
              >
                <option value="7">7 Numbers</option>
                <option value="6">6 Numbers</option>
                <option value="5">5 Numbers</option>
                <option value="4">4 Numbers</option>
                <option value="3">3 Numbers</option>
              </select>
            </div>

            {/* ✅ New Fields */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Start Date-Time</label>
              <input
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">End Date-Time</label>
              <input
                type="datetime-local"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Contest Fee (₹)</label>
              <input
                type="number"
                value={contestFee}
                onChange={(e) => setContestFee(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Enter fee"
              />
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateContest}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default ManageContestPage;
