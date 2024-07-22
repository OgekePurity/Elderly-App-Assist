// src/components/Appointments/AppointmentList.jsx

import React from 'react';
import './AppointmentList.css';

const AppointmentList = ({ appointments }) => {
  return (
    <div className="appointment-list">
      <h2>Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments scheduled.</p>
      ) : (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id} className="appointment-item">
              <h3>Dr. {appointment.doctor}</h3>
              <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
              <p>Time: {appointment.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentList;
