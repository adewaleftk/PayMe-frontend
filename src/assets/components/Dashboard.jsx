import { useNavigate } from 'react-router-dom';
import usePackageStore from '../../../store';

const Dashboard = () => {
  const balance = usePackageStore((state) => state.balance);
  const logout = usePackageStore(state => state.logout);
  const navigate = useNavigate();


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

    navigate('/history');
  };

  const handleLogout = () => {
    // Implement logout logic (e.g., clearing tokens, session) and navigate to the login page
    logout();
    navigate('/login');
  };

  const handleTransfer = () => {
    // Implement logout logic (e.g., clearing tokens, session) and navigate to the login page
    navigate('/transfer');
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
        <button onClick={handleTransfer}>Transfer</button>
        <button onClick={handleTransactionHistory}>Transaction History</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
