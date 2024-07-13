// Update your MedicationTable component
import React from 'react';
import './MedicationTable.css'

/**
 * @typedef {Object} Medication
 * @property {string} id
 * @property {string} name
 * @property {string} dosage
 * @property {string} frequency
 */

/**
 * @typedef {Object} MedicationTableProps
 * @property {Medication[]} medications
 */

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