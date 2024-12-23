import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './login.css';


const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from reloading
    if (email==="email@gmail.com" && password==="qwerty") {
      onLogin(email); // Calls the `onLogin` function passed as a prop
    } else {
      alert('Please fill in all fields!'); // Shows a warning if fields are empty
    }
  };

  return (
    <div style={{ margin: '2rem auto', maxWidth: '400px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
    </div>
  );
};

export default LoginPage;
