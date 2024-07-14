// src/pages/Medications.js
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MedicationTable from '../components/Medication/MedicationTable';
import AddMedicationForm from '../components/Medication/AddMedicationForm';
import { fetchMedications } from '../features/Medications/medicationsSlice';
import './Medications.css';
import logoImg from "../img/logo.png";

function Medications() {
  const dispatch = useDispatch();
  const medications = useSelector((state) => state.medications.medications);

  useEffect(() => {
    dispatch(fetchMedications());
  }, [dispatch]);

  return (
    <>
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
          <Link to="/journal">Journal</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/appointments">Appointments</Link>
          <Link to="/community">Community</Link>
          <Link to="/medications">Medications</Link>
        </div>
      </div>
    <div className="medications">
      <div className="links">
     
        </div>
      <h1>Medications</h1>
      <AddMedicationForm userId={localStorage.getItem('userId') || ''} />
      <MedicationTable medications={medications} />
    </div>
    </>
  );
}

export default Medications;
