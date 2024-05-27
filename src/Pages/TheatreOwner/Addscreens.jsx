import React from 'react';

const Addscreens = () => {
  const renderSeatRows = () => {
    const rows = [];
    const totalSeats = 250;
    const seatsPerRow = 25;

    for (let i = 0; i < totalSeats; i += seatsPerRow) {
      const rowSeats = [];
      for (let j = i; j < i + seatsPerRow; j++) {
        rowSeats.push(
          <div
            key={j}
            className="bg-red-700 text-white rounded-sm mx-1 my-2 w-10 h-10 flex items-center justify-center"
          >
            {j + 1}
          </div>
        );
      }
      rows.push(
        <div key={i} className="flex justify-center">
          {rowSeats}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="bg-gray-200 flex flex-col items-center py-8">
      <div className="bg-gray-400 h-12 w-full flex items-center justify-center text-white mb-4">
        SCREEN
      </div>
      <div className="flex flex-col items-center">
        {renderSeatRows()}
      </div>
      <button class="bg-black text-white font-bold py-2 px-4 rounded hover:text-cyan-500">Add Screen</button>

    </div>
  );

};

export default Addscreens;
