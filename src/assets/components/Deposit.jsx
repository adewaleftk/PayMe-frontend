// src/components/Deposit.js
import { useState } from 'react';

const Deposit = () => {
  const [amount, setAmount] = useState('');

  const handleDeposit = () => {
    // Implement the logic to make a deposit API call here
  };

  return (
    <div>
      <h2>Deposit</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default Deposit;
