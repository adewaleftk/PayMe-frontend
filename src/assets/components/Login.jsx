import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePackageStore from '../../../store';
import '../styles/login.css'
import Success from '../images/try-success.png'

function Login() {
  const login = usePackageStore(state => state.login);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { setBalance } = usePackageStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null); 
  
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
        setBalance(data.balance);
        const userToken = data.token;
        login(userToken);
        // localStorage.setItem(userToken);
        setLoginSuccess(true);
        // Store the JWT token or perform other actions as needed
        console.log('Successfully signed in:', data);
        setTimeout(() => {
          navigate('/dashboard'); // Redirect to dashboard
        }, 5000); 
  
        // You can redirect the user to another page or update the UI here
      } else {
        // Sign-in failed, handle error response
        const errorData = await response.json();
        console.error('Sign-in failed:', errorData.msg);
        setLoginError(errorData.msg); 
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
        {loginError && <p className="error-message">{loginError}</p>}
        <button type="submit">Sign In</button>
      </form>
      {loginSuccess && (
        <div className="login-success-popup">
          <div className="login-success-body">
            <h2>Login Successful</h2>
            <img src={Success} />
            <p>You are now being redirected to your Dashboard</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
