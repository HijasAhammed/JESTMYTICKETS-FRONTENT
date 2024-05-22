import React from 'react';
import { Link } from 'react-router-dom';

const Screens = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Screens</h1>
       <Link to='/addscreens'>
       <button className="bg-black text-white hover:text-cyan-500 py-2 px-4 rounded">Add screens</button>
       </Link>
         
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-100 w-64">
            <img
              src="https://via.placeholder.com/150"
              alt="Movie Poster"
              className="h-80 w-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Movie Title</h2>
              <p className="text-gray-600 mb-2">Genre: Action</p>
              <p className="text-gray-600">Year: 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screens;