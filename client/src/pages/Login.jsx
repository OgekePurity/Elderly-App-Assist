// src/pages/Login.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import { login } from '../utils/api';

/**
 * @typedef {Object} LoginData
 * @property {string} email
 * @property {string} password
 */

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await login(data);
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.userId);
      navigate('/profile');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const fields = [
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' },
  ];

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <Form fields={fields} onSubmit={handleLogin} submitText="Login" />
    </div>
  );
};

export default Login;