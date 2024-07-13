// src/pages/Medications.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MedicationTable from '../components/Medication/MedicationTable';
import AddMedicationForm from '../components/Medication/AddMedicationForm';
import { fetchMedications } from '../features/medications/medicationsSlice';
import './Medications.css';

function Medications() {
  const dispatch = useDispatch();
  const medications = useSelector((state) => state.medications.medications);

  useEffect(() => {
    dispatch(fetchMedications());
  }, [dispatch]);

  return (
    <div className="medications">
      <h1>Medications</h1>
      <AddMedicationForm userId={localStorage.getItem('userId') || ''} />
      <MedicationTable medications={medications} />
    </div>
  );
}

export default Medications;
