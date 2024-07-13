import React, { useState } from 'eact';
import { useNavigate } from 'eact-router-dom';
import AddMedicationForm from '../components/Medication/AddMedicationForm';
import MedicationTable from '../components/Medication/MedicationTable';

/**
 * @typedef {Object} Medication
 * @property {string} id
 * @property {string} name
 * @property {string} dosage
 * @property {string} frequency
 */

function Profile() {
  const navigate = useNavigate();
  const [medications, setMedications] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  const handleAddMedication = async (newMedication) => {
    setMedications([...medications, { id: 'newId',...newMedication }]); // Temporary ID, adjust according to your logic
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={handleLogout}>Logout</button>
      <AddMedicationForm onAdd={handleAddMedication} userId={localStorage.getItem('userId')?? ''}/>
      <MedicationTable medications={medications} />
    </div>
  );
};

export default Profile;