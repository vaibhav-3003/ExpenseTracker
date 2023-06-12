import React from 'react'

const Transaction = () => {
  return (
    <div className="px-3 mt-5">
      <h2 className="text-lg font-semibold mb-2">Add new transaction</h2>
      <hr />
      <h3 className="my-2 text-sm font-semibold">Text</h3>
      <input
        type="text"
        name="text"
        className="w-full border px-2 py-1 outline-none"
        placeholder="Enter text..."
        autoComplete='false'
      />
      <h3 className="my-2 font-semibold text-sm">
        Amount <br />
        (negative-expense, positive-income)
      </h3>
      <input
        type="text"
        name="amount"
        className="w-full border px-2 py-1 outline-none mb-4"
        placeholder="Enter amount..."
        autoComplete='false'
      />
      <button type='submit' className='bg-green-500 text-white w-full py-1 mb-2'>Add transaction</button>
    </div>
  );
}

export default Transaction