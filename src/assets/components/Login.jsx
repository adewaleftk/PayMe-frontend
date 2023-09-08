import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Extract the email and password from the formData object
    const { email, password } = formData;
  
    // Create an object to send in the POST request
    const signInData = {
      email,
      password,
    };
  
    try {
      // Send a POST request to your sign-in API endpoint
      const response = await fetch('https://payme-backend.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInData),
      });
  
      if (response.ok) {
        // Successful sign-in, parse the response JSON
        const data = await response.json();
        console.log(data.token);
        console.log(data.balance);
        // Store the JWT token or perform other actions as needed
        console.log('Successfully signed in:', data);
        navigate('/dashboard');
  
        // You can redirect the user to another page or update the UI here
      } else {
        // Sign-in failed, handle error response
        const errorData = await response.json();
        console.error('Sign-in failed:', errorData.msg);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      // Handle other errors, such as network issues
    }
  };
  

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
