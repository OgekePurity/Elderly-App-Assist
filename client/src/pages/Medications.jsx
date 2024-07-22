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
  const userId = localStorage.getItem('userId') || '';

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
          <Link to="/blog">Blog</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/funzone">Funzone</Link>
          <Link to="/medications">Medications</Link>
          <Link to="/Profile">Profile</Link>
        </div>
      </div>
      <div className="medications">
        <h1>Medications</h1>
        <AddMedicationForm userId={userId} />
        <MedicationTable medications={medications} />
      </div>
    </>
  );
}

export default Medications;
