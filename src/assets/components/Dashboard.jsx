import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePackageStore from '../../../store';
import '../styles/dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const balance = usePackageStore((state) => state.balance);
  const logout = usePackageStore((state) => state.logout);
  const navigate = useNavigate();

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
