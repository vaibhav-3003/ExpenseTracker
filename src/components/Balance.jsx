import React from 'react'

const Balance = () => {
  return (
    <div className="py-5 px-3">
      <h3 className="font-semibold uppercase">Your Balance</h3>
      <h2 className="text-2xl font-medium">$260.00</h2>
      <div className="mt-3 py-4 bg-white flex justify-between shadow-md">
        <div className="w-1/2 border-r border-gray-200 flex flex-col justify-center items-center">
          <h2 className='uppercase text-sm'>Income</h2>
          <h2 className='text-green-600 text-xl text-medium'>$500.00</h2>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h2 className='uppercase text-sm'>Expense</h2>
          <h2 className = "text-red-600 text-xl text-medium">$240.00</h2>
        </div>
      </div>
    </div>
  );
}

export default Balance
