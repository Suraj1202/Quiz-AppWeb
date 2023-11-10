import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/register', formData);
      // Handle successful registration, e.g., redirect to login page
    } catch (error) {
      console.error('Registration failed', error);
      // Handle registration failure, e.g., show an error message
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleInputChange} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
