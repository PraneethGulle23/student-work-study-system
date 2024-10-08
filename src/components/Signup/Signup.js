// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    degree: '',
    university: '',
    city: '',
    country: ''
  });

  // Handle form data change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', formData);

    // Logic for form validation or API calls can be added here

    // After successful signup, redirect to Login page
    navigate('/login');
  };

  return (
    <div className="signup-dialog">
      <h2>Create a New Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Details</legend>
          <div className="form-group">
            <input type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="text" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          </div>
        </fieldset>

        <fieldset>
          <legend>Educational Details</legend>
          <div className="form-group">
            <input type="text" id="degree" placeholder="Degree of Study" value={formData.degree} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="text" id="university" placeholder="University/College" value={formData.university} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="text" id="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="text" id="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
          </div>
        </fieldset>

        <button type="submit" className="signup-btn">Sign Up</button>
        <button type="button" className="google-signup">Login with Google</button>
      </form>
    </div>
  );
}

export default Signup;
