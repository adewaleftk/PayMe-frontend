import { useState } from 'react';
import usePackageStore from '../../../store';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const userToken = usePackageStore(state => state.userToken);

  const handleWithdraw = async () => {
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
        // You can update the UI or show a success message here
      } else {
        // Deposit failed, handle error response
        const errorData = await response.json();
        console.error('Withdraw failed:', errorData.msg);
        // Handle and display the error message to the user
      }
    } catch (error) {
      console.error('Error during withdraw:', error);
      // Handle other errors, such as network issues
    }
  };

  return (
    <div>
      <h2>Withdraw</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Withdraw;
