import React, { useState } from 'react';
import usePackageStore from '../../../store';
import '../styles/withdraw.css';
import { useNavigate } from 'react-router-dom';
import Success from '../images/try-success.png'

function Withdraw() {
  const [amount, setAmount] = useState('');
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  const [withdrawError, setWithdrawError] = useState(null);
  const userToken = usePackageStore(state => state.userToken);
  const navigate = useNavigate();

  const handleWithdraw = async () => {
    setWithdrawError(null);
    try {
      // Create an object to send in the POST request body
      const withdrawData = {
        amount: parseFloat(amount), // Parse the amount as a float
      };

      // Send a POST request to your deposit API endpoint
      const response = await fetch('https://payme-backend.onrender.com/api/v1/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': userToken, // Include the JWT token if required
        },
        body: JSON.stringify(withdrawData),
      });

      if (response.ok) {
        // Successful deposit, handle the response or show a success message
        const data = await response.json();
        console.log('Withdraw successful:', data.msg);
        setWithdrawSuccess(true);
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to dashboard
        }, 5000);
        // You can update the UI or show a success message here
      } else {
        // Deposit failed, handle error response
        const errorData = await response.json();
        console.error('Withdraw failed:', errorData.msg);
        setWithdrawError(errorData.msg);
        // Handle and display the error message to the user
      }
    } catch (error) {
      console.error('Error during withdraw:', error);
      // Handle other errors, such as network issues
    }
  };

  return (
    <div className="withdraw-container">
      <h2 className="withdraw-title">Withdraw</h2>
      <input
        type="number"
        className="withdraw-input"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
        {withdrawError && <p className="error-message">{withdrawError}</p>}
      <button onClick={handleWithdraw} className="withdraw-button">Withdraw</button>
      {withdrawSuccess && (
        <div className="login-success-popup">
          <div className="login-success-body">
            <h2>Withdraw Successful</h2>
            <img src={Success} />
            <p>You are now being redirected to your Dashboard</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Withdraw;
