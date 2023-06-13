import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount >0 ? '+':'-';
    const theme =
      sign === "+"
        ? "bg-white flex justify-between px-3 py-2 mt-3 shadow-md border-r-4 border-green-500 w-full"
        : "bg-white flex justify-between px-3 py-2 mt-3 shadow-md border-r-4 border-red-500 w-full";
  return (
    <div className="flex">
      {/* <div className='mt-3 mr-2 flex justify-center items-center'>
        <button className="bg-red-500 px-2.5 py-1 text-white font-medium rounded-full" onClick={deleteTransaction(transaction.id)}>X</button>
      </div> */}
      <div className={theme}>
        <h3>{transaction.text}</h3>
        <h3>
          {sign}${Math.abs(transaction.amount)}
        </h3>
      </div>
    </div>
  );
}

export default Transaction
