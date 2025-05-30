import AdminLayout from '@/app/AdminLayout';
import React from 'react';

const CustomerListPage = () => {
  const customers = [
    {
      id: 'CUST001',
      name: 'Ravi Kumar',
      email: 'ravi@example.com',
      phone: '9876543210',
      status: 'Active',
    },
    {
      id: 'CUST002',
      name: 'Anjali Sharma',
      email: 'anjali@example.com',
      phone: '9876501234',
      status: 'Inactive',
    },
    {
      id: 'CUST003',
      name: 'Amit Jain',
      email: 'amit@example.com',
      phone: '9876567890',
      status: 'Active',
    },
  ];

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Customer List</h1>

        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Customer ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Phone</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{customer.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{customer.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{customer.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{customer.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        customer.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {customer.status}
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

export default CustomerListPage;
