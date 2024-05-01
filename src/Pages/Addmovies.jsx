import React from 'react'

const Addmovies = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
         <div className="mb-4">
  <label className="text-gray-700 block font-semibold mb-2">Add Image:</label>
  <div className="flex items-center flex-col">
  <div className="ml-4 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 h-96 w-72">
      <span className="text-sm">Preview</span>
    </div>
    <input
      type="file"
      name="image"
      accept="image/*"
      className="border border-gray-300 rounded-md px-3 py-2 w-full"
    />
   
  </div>
</div>
  <div className="mb-4">
    <h1 className="text-lg font-semibold mb-2">
      <label className="text-gray-700">Movie Name:</label>
    </h1>
    <input
      type="text"
      name="name"
      className="border border-gray-300 rounded-md px-3 py-2 w-full"
    />
  </div>
  <div className="mb-4">
    <label className="text-gray-700">About the Movie:</label>
    <textarea
      name="description"
      className="border border-gray-300 rounded-md px-3 py-2 w-full"
      rows="3"
    ></textarea>
  </div>

  <div className="mb-4">
    <label className="text-gray-700">Language:</label>
    <input
      type="text"
      name="language"
      className="border border-gray-300 rounded-md px-3 py-2 w-full"
    />
  </div>

  <div className="mb-4">
    <label className="text-gray-700">Version:</label>
    <input
      type="text"
      name="version"
      className="border border-gray-300 rounded-md px-3 py-2 w-full"
    />
  </div>
  <button
    type="submit"
    className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300"
    >Add Movie
  </button>
</div>
  )
}

export default Addmovies