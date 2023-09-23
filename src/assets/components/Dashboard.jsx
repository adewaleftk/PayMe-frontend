import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import usePackageStore from '../../../store';
import '../styles/dashboard.css';

const Dashboard = () => {
  const balance = usePackageStore((state) => state.balance);
  const logout = usePackageStore((state) => state.logout);
  const navigate = useNavigate();

  // Load balance from local storage when the component mounts
  useEffect(() => {
    const storedBalance = localStorage.getItem('balance');
    if (storedBalance) {
      // Parse the stored balance as a number
      usePackageStore.setState({ balance: parseFloat(storedBalance) });
    }
  }, []);

  // Save the balance to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('balance', balance.toString());
  }, [balance]);

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

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="balance">
        <p>Balance: {balance}</p>
      </div>
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
