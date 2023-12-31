import React, { useState } from 'react';
import usePackageStore from '../../../store';
import '../styles/deposit.css';
import { useNavigate } from 'react-router-dom';
import Success from '../images/try-success.png'

const Deposit = () => {
  const navigate = useNavigate();
  const [depositSuccess, setDepositSuccess] = useState(false);
  const [depositError, setDepositError] = useState(null);
  const [amount, setAmount] = useState('');
  const userToken = usePackageStore(state => state.userToken);

  const handleDeposit = async () => {
      setDepositError(null);
    try {
      // Create an object to send in the POST request body
      const depositData = {
        amount: parseFloat(amount), // Parse the amount as a float
      };

      // Send a POST request to your deposit API endpoint
      const response = await fetch('https://payme-backend.onrender.com/api/v1/deposit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userToken, // Include the JWT token if required
        },
        body: JSON.stringify(depositData),
      });

      if (response.ok) {
        // Successful deposit, handle the response or show a success message
        const data = await response.json();
        console.log('Deposit successful:', data.msg);
        setDepositSuccess(true);
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to dashboard
        }, 5000); 
        // You can update the UI or show a success message here
      } else {
        // Deposit failed, handle error response
        const errorData = await response.json();
        console.error('Deposit failed:', errorData.msg);
        setDepositError(errorData.msg);
        // Handle and display the error message to the user
      }
    } catch (error) {
      console.error('Error during deposit:', error);
      // Handle other errors, such as network issues
    }
  };

  return (
    <div className="deposit-container">
      <h2 className="deposit-title">Deposit</h2>
      <input
        className="deposit-input"
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
        {depositError && <p className="error-message">{depositError}</p>}
      <button className="deposit-button" onClick={handleDeposit}>Deposit</button>
        {depositSuccess && (
        <div className="login-success-popup">
          <div className="login-success-body">
            <h2>Deposit Successful</h2>
            <img src={Success} />
            <p>You are now being redirected to your Dashboard</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deposit;
