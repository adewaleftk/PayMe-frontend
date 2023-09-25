import React, { useState, useEffect } from 'react';
import usePackageStore from '../../../store';
import '../styles/transactionhistory.css';

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
    <div className="transaction-history-container">
      <h2 className="transaction-history-title">Transaction History</h2>
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <li key={transaction._id} className="transaction-item">
            <div className="transaction-details">
              <p className="transaction-amount">Amount: {transaction.amount}</p>
              <p className="transaction-type">Type: {transaction.type}</p>
              <p className="transaction-time">Time: {transaction.timestamp}</p>
              <p className="transaction-time">Sender: {transaction.senderId.phoneNumber}</p>
              {transaction.sender && (
                <p className="transaction-time">Sender: {transaction.sender.accountNumber}</p>
                // Add more details from your Transaction model
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
