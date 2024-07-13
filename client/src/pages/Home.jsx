// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Health App</h1>
      <p>Your personal health management assistant</p>
      <div className="feature-list">
        <Link to="/medications" className="feature-item">
          <h2>Medications</h2>
          <p>Track and manage your medications</p>
        </Link>
        <Link to="/appointments" className="feature-item">
          <h2>Appointments</h2>
          <p>Schedule and view your doctor appointments</p>
        </Link>
        <Link to="/journal" className="feature-item">
          <h2>Journal</h2>
          <p>Keep a personal health journal</p>
        </Link>
        <Link to="/community" className="feature-item">
          <h2>Community</h2>
          <p>Connect with others and share experiences</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;