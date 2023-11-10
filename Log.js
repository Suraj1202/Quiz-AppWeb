import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      const { token } = response.data;
      onLogin(token);
    } catch (error) {
      console.error('Login failed', error);
      
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Email:
        <input type="email" name="email" onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleInputChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
