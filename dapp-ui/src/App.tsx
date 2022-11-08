import React from 'react';
import './App.css';
import { tronweb } from './utils/TronWebApi';

function App() {
  return (
    <div className="App App-header">
      <button onClick={() => {
        console.log(tronweb.getWalletProveider());
      }}>Get wallet tronlink provider</button>
    </div>
  );
}

export default App;
