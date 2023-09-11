// src/components/TransactionHistory.js
import { useState, useEffect } from 'react';
import usePackageStore from '../../../store';

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const userToken = usePackageStore((state) => state.userToken);

  useEffect(() => {
    // Fetch transaction history data from the backend
    const fetchTransactionHistory = async () => {
      try {
        const response = await fetch('https://payme-backend.onrender.com/api/v1/transaction-history', {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': userToken,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTransactions(data);
        } else {
          console.error('Failed to fetch transaction history');
        }
      } catch (error) {
        console.error('Error fetching transaction history:', error);
      }
    };

    fetchTransactionHistory();
  }, [userToken]);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            Transaction Amount: {transaction.amount}
            {/* Add more details from your Transaction model */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
