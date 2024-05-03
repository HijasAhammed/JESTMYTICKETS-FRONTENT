    import React from 'react'

    const Addbanner = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
        <label className="block text-gray-700 font-bold mb-2">Add image</label>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
        <div className="mb-4">
            <label htmlFor="" className="block text-gray-700 font-bold mb-2">
            Banner Name
            </label>
            <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:text-cyan-500">
            Submit
        </button>
        </div>
    )
    }

    export default Addbanner