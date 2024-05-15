import React from 'react';

const Bookings = () => {
  return (
    <div className="bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Booking 1</h3>
            <p className="text-gray-600">Date: May 15, 2024</p>
            <p className="text-gray-600">Time: 10:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;