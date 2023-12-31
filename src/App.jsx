import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import History from './components/History';
import Transaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {

  return (
    <GlobalProvider>
      <div className="flex flex-col justify-center items-center py-5">
        <div>
          <Header />
          <Balance />
          <History />
          <Transaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App
