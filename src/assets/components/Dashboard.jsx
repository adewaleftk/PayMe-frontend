import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  // Fetch user's balance upon component mount (you may need to make an API call)
  useEffect(() => {
    // Fetch user's balance here and set it using setBalance
    // Example: fetchBalance().then((balance) => setBalance(balance));
  }, []);

  const handleDeposit = () => {
    // Implement deposit logic and navigate to the deposit page
    navigate('/deposit');
  };

  const handleWithdraw = () => {
    // Implement withdraw logic and navigate to the withdraw page
    navigate('/withdraw');
  };

  const handleTransactionHistory = () => {
    // Implement transaction history logic and navigate to the history page
    navigate('/transaction-history');
  };

  const handleLogout = () => {
    // Implement logout logic (e.g., clearing tokens, session) and navigate to the login page
    navigate('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <p>Balance: {balance}</p>
      </div>
      <div>
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
        <button onClick={handleTransactionHistory}>Transaction History</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
