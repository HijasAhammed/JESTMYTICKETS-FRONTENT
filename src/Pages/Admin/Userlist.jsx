import React from 'react';

const Userlist = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="userlist" className="font-bold">User List</label>
      </div>
      <div className="border flex justify-between border-gray-300 rounded-lg p-4">
       
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="font-bold">First Name:</span> John
          </div>
          <div className="mb-2">
            <span className="font-bold">Last Name:</span> Doe
          </div>
          <div className="mb-2">
            <span className="font-bold">Email:</span> john.doe@example.com
          </div>
          <div className="mb-2">
            <span className="font-bold">Password:</span> ********
          </div>
        </div>
        <div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
        </div>
      </div>
    </div>
  );
};

export default Userlist;