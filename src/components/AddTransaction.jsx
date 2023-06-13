import React, { useState,useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const Transaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  const [text, setText] = useState(''); 
  const [amount, setAmount] = useState(0); 

  const handleClick = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text: text,
      amount: parseInt(amount),
    }

    addTransaction(newTransaction);
  }


  return (
    <div className="px-3 mt-5">
      <h2 className="text-lg font-semibold mb-2">Add new transaction</h2>
      <hr />
      <h3 className="my-2 text-sm font-semibold">Text</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border px-2 py-1 outline-none"
        placeholder="Enter text..."
        autoComplete="false"
      />
      <h3 className="my-2 font-semibold text-sm">
        Amount <br />
        (negative-expense, positive-income)
      </h3>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full border px-2 py-1 outline-none mb-4"
        placeholder="Enter amount..."
        autoComplete="false"
      />
      <button
        type="submit"
        className="bg-green-500 text-white w-full py-1 mb-2"
        onClick={handleClick}
      >
        Add transaction
      </button>
    </div>
  );
}

export default Transaction