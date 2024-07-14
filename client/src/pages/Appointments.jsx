// src/pages/Appointments.jsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppointmentList from '../components/Appointments/AppointmentList';
import AddAppointmentForm from '../components/Appointments/AddAppointmentForm';
import { fetchAppointments, addAppointment } from '../features/Appointment/appointmentsSlice';
import './Appointments.css';
import { Link } from 'react-router-dom';
import logoImg from '../img/logo.png';

function Appointments() {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments.appointments);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const handleAddAppointment = async (newAppointment) => {
    await dispatch(addAppointment(newAppointment));
  };

  return (
    <div className="appointments">
      <div className="nav">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="links">
          <Link to="/home" className="mainlink">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/journal">JOURNAL</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/profile">PROFILE</Link>
        </div>
      </div>
      <h1>Appointments</h1>
      <AddAppointmentForm onAdd={handleAddAppointment} />
      <AppointmentList appointments={appointments} />
    </div>
  );
}

export default Appointments;
