import { useState } from 'react';
import usePackageStore from '../../../store';

function Transfer() {
  const [receiverAccountNumber, setReceiverAccountNumber] = useState('');
  const [amount, setAmount] = useState(0);
  const userToken = usePackageStore(state => state.userToken);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object to send in the POST request
    const transferData = {
      recipientPhoneNumber: receiverAccountNumber, // Adjust the field name if needed
      amount,
    };

    try {
      // Send a POST request to your transfer API endpoint
      const response = await fetch('https://payme-backend.onrender.com/api/v1/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Include the authentication token if required
          'x-auth-token': userToken,
        },
        body: JSON.stringify(transferData),
      });

      if (response.ok) {
        // Successful transfer, you can handle success here
        console.log('Transfer successful');
        // Optionally, reset the form fields or navigate to another page
      } else {
        // Transfer failed, handle error response
        const errorData = await response.json();
        console.error('Transfer failed:', errorData.msg);
      }
    } catch (error) {
      console.error('Error during transfer:', error);
      // Handle other errors, such as network issues
    }
  };

  return (
    <div>
      <h2>Transfer Funds</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Receiver&apos;s Account Number:</label>
          <input
            type="text"
            value={receiverAccountNumber}
            onChange={(e) => setReceiverAccountNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}

export default Transfer;
