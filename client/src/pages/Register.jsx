// src/pages/Register.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../frontend/src/components/Form';
import { register } from '../../../frontend/src/utils/api';

/**
 * @typedef {Object} RegisterData
 * @property {string} name
 * @property {string} email
 * @property {string} password
 */

function Register() {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      await register(data);
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const fields = [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' },
  ];

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <Form fields={fields} onSubmit={handleRegister} submitText="Register" />
    </div>
  );
};

export default Register;