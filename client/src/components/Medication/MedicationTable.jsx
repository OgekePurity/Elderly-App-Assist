// src/components/Medication/MedicationTable.js

import React from 'react';
import './MedicationTable.css';

const MedicationTable = ({ medications }) => {
  return (
    <table className="medication-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Dosage</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        {medications.map((medication) => (
          <tr key={medication.id}>
            <td>{medication.name}</td>
            <td>{medication.dosage}</td>
            <td>{medication.frequency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedicationTable;
