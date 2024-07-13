// src/pages/Notifications.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotificationList from '../components/Notification/NotificationList';
import './Notifications.css';

/**
 * @typedef {Object} Notification
 * @property {string} _id
 * @property {string} message
 * @property {string} date
 */

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/notifications', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  return (
    <div className="notifications">
      <h1>Notifications</h1>
      <NotificationList notifications={notifications} />
    </div>
  );
};

export default Notifications;