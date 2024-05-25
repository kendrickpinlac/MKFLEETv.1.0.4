import React from 'react';

const UserListComponent = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Vehicle</th>
              <th className="px-4 py-2">Pickup Date</th>
              <th className="px-4 py-2">Return Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">Toyota Camry</td>
              <td className="border px-4 py-2">2024-05-20</td>
              <td className="border px-4 py-2">2024-05-25</td>
              <td className="border px-4 py-2">Scheduled</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Jane Smith</td>
              <td className="border px-4 py-2">Honda Civic</td>
              <td className="border px-4 py-2">2024-05-22</td>
              <td className="border px-4 py-2">2024-05-27</td>
              <td className="border px-4 py-2">Scheduled</td>
            </tr>
            {/* Add more sample rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListComponent;
