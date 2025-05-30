import React from "react";
import AdminLayout from "@/app/AdminLayout";

const contests = {
  running: [
    { id: 1, name: "Pick 6", endDate: "2025-06-01" },
    { id: 2, name: "Pick 7", endDate: "2025-06-05" },
  ],
  upcoming: [
    { id: 3, name: "Pick 5", startDate: "2025-06-10" },
  ],
  completed: [
    { id: 4, name: "Pick 3", endDate: "2025-05-01" },
  ],
};

const Page = () => {
  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Running Contests */}
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
              🟢 Running Contests
            </h2>
            {contests.running.length > 0 ? (
              <ul className="space-y-2">
                {contests.running.map((contest) => (
                  <li key={contest.id} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    <div className="font-medium">{contest.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Ends on: {contest.endDate}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No running contests.</p>
            )}
          </div>

          {/* Upcoming Contests */}
          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
              🔵 Upcoming Contests
            </h2>
            {contests.upcoming.length > 0 ? (
              <ul className="space-y-2">
                {contests.upcoming.map((contest) => (
                  <li key={contest.id} className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    <div className="font-medium">{contest.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Starts on: {contest.startDate}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No upcoming contests.</p>
            )}
          </div>

          {/* Completed Contests */}
          <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-3">
              ⚪ Completed Contests
            </h2>
            {contests.completed.length > 0 ? (
              <ul className="space-y-2">
                {contests.completed.map((contest) => (
                  <li key={contest.id} className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-sm">
                    <div className="font-medium">{contest.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Ended on: {contest.endDate}</div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No completed contests.</p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Page;
