import React from 'react'

const History = () => {
  return (
    <div className="px-3">
      <h2 className="text-lg font-semibold mb-1">History</h2>
      <hr />
      <div className="bg-white flex justify-between px-3 py-2 mt-3 shadow-md border-r-4 border-green-500">
        <h3>Cash</h3>
        <h3>+500</h3>
      </div>
      <div className="bg-white flex justify-between px-3 py-2 mt-3 shadow-md border-r-4 border-red-500">
        <h3>Book</h3>
        <h3>-40</h3>
      </div>
      <div className="bg-white flex justify-between px-3 py-2 mt-3 shadow-md border-r-4 border-red-500">
        <h3>Camera</h3>
        <h3>-200</h3>
      </div>
    </div>
  );
}

export default History
