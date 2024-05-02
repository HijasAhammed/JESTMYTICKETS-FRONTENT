import React from 'react';

const Addbanner = () => {
  return (
    <div className="bg-white p-4">
      <div className="mb-4">
        <button className="bg-black text-white px-4 py-2 rounded-md hover:text-cyan-500">
          Add Banner  
        </button>
      </div>
      <div>
        <label className="text-gray-700 block font-semibold mb-2">Banners</label>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Banner Name"
              className="w-16 h-16 object-cover mr-4"
            />
            <span>Banner Name</span>
          </div>
          <div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addbanner;