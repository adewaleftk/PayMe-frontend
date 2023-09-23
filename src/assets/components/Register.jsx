import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css'

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const { phoneNumber, password, firstName, lastName, email } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleLogin(e) {
    e.preventDefault();
    navigate('/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://payme-backend.onrender.com/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData);
        return;
      }

      const successData = await response.json();
      console.log(successData); 
      navigate('/login');
      // Handle successful registration

      // Optionally, you can redirect the user to another page after successful registration.
      // For example: history.push('/login');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
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
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit} type="submit">Register</button>
        <p style={{textAlign: 'center'}}>Have an account already?</p>
        <button onClick={handleLogin} type="submit">Login</button>
      </>
    </div>
  );
};

export default Register;
