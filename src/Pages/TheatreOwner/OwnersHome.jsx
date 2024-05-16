import React from 'react';
import { Link } from 'react-router-dom';

// Sample data for the theater owner and theater
const theaterOwner = {
  name: 'Hijas Ahammed',
  theater: 'Regal Cinemas'
};

const OwnersHome = () => {
  return (
    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Welcome, {theaterOwner.name}</h1>
        <p className="text-lg">Theater: {theaterOwner.theater}</p>
      </div>
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <Link to="/Addmovies">
          <h2 className="text-2xl font-bold mb-4">Add Movies</h2>
        </Link>
      </div>
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <Link to='/movielist'>
          <h2 className="text-2xl font-bold mb-4">Movie list</h2>
        </Link>
      </div>
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <Link to='/movielist'>
          <h2 className="text-2xl font-bold mb-4">Screens</h2>
        </Link>
      </div>
    </div>
  );
};

export default OwnersHome;