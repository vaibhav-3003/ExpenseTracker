import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);

  const income = amounts
        .filter(item => item >0)
        .reduce((acc,item) => (acc+=item),0)
        .toFixed(2);

  const expense = (amounts
        .filter(item => item <0)
        .reduce((acc,item) => (acc+=item),0) * -1
  ).toFixed(2);

  return (
    <div className="py-5 px-3">
      <h3 className="font-semibold uppercase">Your Balance</h3>
      <h2 className="text-2xl font-medium">${total}</h2>
      <div className="mt-3 py-4 bg-white flex justify-between shadow-md">
        <div className="w-1/2 border-r border-gray-200 flex flex-col justify-center items-center">
          <h2 className='uppercase text-sm'>Income</h2>
          <h2 className='text-green-600 text-xl text-medium'>${income}</h2>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h2 className='uppercase text-sm'>Expense</h2>
          <h2 className = "text-red-600 text-xl text-medium">${expense}</h2>
        </div>
      </div>
    </div>
  );
}

export default Balance
