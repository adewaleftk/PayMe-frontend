import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usePackageStore from '../../../store';
import '../styles/dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [balance, setBalance] = useState(null);
  const logout = usePackageStore((state) => state.logout);
  const navigate = useNavigate();
  const userToken = usePackageStore(state => state.userToken);

  const handleDeposit = () => {
    navigate('/deposit');
  };

  const handleWithdraw = () => {
    navigate('/withdraw');
  };

  const handleTransactionHistory = () => {
    navigate('/history');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleTransfer = () => {
    navigate('/transfer');
  };

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('https://payme-backend.onrender.com/api/v1/balance', {
          headers: {
            'x-auth-token': userToken,
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch balance');
        }
  
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };
  
    fetchBalance();
  }, []);
  

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      {balance !== null ? (
        <div className="balance">
          <p>Balance: {balance}</p>
        </div>
      ) : (
        <p>Loading balance...</p>
      )}
      <div className="action-buttons">
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
        <button onClick={handleTransfer}>Transfer</button>
        <button onClick={handleTransactionHistory}>Transaction History</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
