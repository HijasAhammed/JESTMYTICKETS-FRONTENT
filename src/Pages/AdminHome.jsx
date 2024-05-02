import React from 'react';
import Addmovies from './Addmovies';
import { Link } from 'react-router-dom';
const Admin = () => {
  return (
    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
       <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
</div>
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
  <Link to="/Addmovies"><h2 className="text-2xl font-bold mb-4">Add Movies</h2></Link>
</div>

<div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
  <Link to="/addbanner"><h2 className="text-2xl font-bold mb-4">Add Banner</h2></Link>
</div>

<div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">User Details</h2>
  {/* <UserDetails /> */}
</div>
    </div>
  );
};

export default Admin;