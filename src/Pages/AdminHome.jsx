import React from 'react';
const Admin = () => {
  return (
    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
       <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
  {/* <AddBanner /> */}
</div>
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">Add Movies</h2>
  {/* <AddMovie /> */}
</div>

<div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">Add Banner</h2>
  {/* <AddBanner /> */}
</div>

<div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold mb-4">User Details</h2>
  {/* <UserDetails /> */}
</div>
    </div>
  );
};

export default Admin;