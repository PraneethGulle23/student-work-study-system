// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate(); // Hook for navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to handle login errors

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Temporarily allow access for all users
    // Clear any error messages
    setError('');

    // Redirect to the Dashboard regardless of the credentials
    navigate('/dashboard');
  };

  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the Signup page
  };

  const handleGoogleLogin = () => {
    // Add Google login logic here
  };

  return (
    <div className="login-dialog">
      <h2>Welcome to Student Work-Study</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Capture email input
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Capture password input
            required 
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
        <button type="button" className="google-login" onClick={handleGoogleLogin}>Login with Google</button>
        <div className="signup-section">
          <p>New User?</p>
          <button type="button" className="signup-btn" onClick={handleSignupClick}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
