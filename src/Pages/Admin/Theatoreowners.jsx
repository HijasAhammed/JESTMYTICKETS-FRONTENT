import React from 'react';

// Sample data for theater owners and theater names
const theaterOwners = [
  { name: 'John Doe', theater: 'Regal Cinemas', location:" Perinthalmanna"},
  { name: 'Jane Smith', theater: 'AMC Theaters', location:" Manjeri" },
  { name: 'Michael Johnson', theater: 'Cinemark', location:" Wandoor" },
  // Add more theater owners here
];

const Theatoreowners = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Theater Owners</h2>
      <ul className="list-none">
        {theaterOwners.map((owner, index) => (
          <li key={index} className="mb-4 border p-4 rounded-md shadow-md bg-gray-100">
            <p className="text-lg font-semibold">Owner: {owner.name}</p>
            <p className="text-gray-600">Theater: {owner.theater}</p>
            <p className="text-gray-600">Location:{owner.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Theatoreowners;