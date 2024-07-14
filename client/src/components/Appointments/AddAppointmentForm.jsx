// src/components/Appointments/AddAppointmentForm.jsx

import React, { useState } from 'react';
import './AddAppointmentForm.css';

const AddAppointmentForm = ({ onAdd }) => {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ doctor, date, time });
    setDoctor('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-appointment-form">
      <h2>Schedule New Appointment</h2>
      <div>
        <label htmlFor="doctor">Doctor:</label>
        <input
          type="text"
          id="doctor"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Schedule Appointment</button>
    </form>
  );
};

export default AddAppointmentForm;
