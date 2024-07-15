import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { fetchMedications, deleteMedication, updateMedication } from '../../features/Medications/medicationsSlice';
import './MedicationTable.css';

const MedicationTable = () => {
  const dispatch = useDispatch();
  const medications = useSelector((state) => state.medications.medications);
  const [editMode, setEditMode] = useState(null);
  const [editedMedication, setEditedMedication] = useState({
    _id: '',
    name: '',
    dosage: '',
    frequency: ''
  });

  useEffect(() => {
    dispatch(fetchMedications());
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (!id) {
      console.error('Invalid medication ID for delete operation.');
      return;
    }
    try {
      await dispatch(deleteMedication(id)).unwrap();
      dispatch(fetchMedications()); // Fetch the updated list of medications
    } catch (error) {
      console.error('Failed to delete medication:', error);
    }
  };

  const handleEditClick = (medication) => {
    setEditMode(medication._id);
    setEditedMedication(medication);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedMedication((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    if (!editedMedication._id) {
      console.error('Invalid medication ID for update operation.');
      return;
    }
    try {
      await dispatch(updateMedication(editedMedication)).unwrap();
      setEditMode(null);
      dispatch(fetchMedications()); // Fetch the updated list of medications
    } catch (error) {
      console.error('Failed to update medication:', error);
    }
  };

  return (
    <table className="medication-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Dosage</th>
          <th>Frequency</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {medications.map((medication) => (
          <tr key={medication._id}>
            <td>
              {editMode === medication._id ? (
                <input
                  type="text"
                  name="name"
                  value={editedMedication.name || ''}
                  onChange={handleEditChange}
                />
              ) : (
                medication.name
              )}
            </td>
            <td>
              {editMode === medication._id ? (
                <input
                  type="text"
                  name="dosage"
                  value={editedMedication.dosage || ''}
                  onChange={handleEditChange}
                />
              ) : (
                medication.dosage
              )}
            </td>
            <td>
              {editMode === medication._id ? (
                <input
                  type="text"
                  name="frequency"
                  value={editedMedication.frequency || ''}
                  onChange={handleEditChange}
                />
              ) : (
                medication.frequency
              )}
            </td>
            <td>
              {editMode === medication._id ? (
                <button onClick={handleUpdate}>Update</button>
              ) : (
                <>
                  <FaEdit onClick={() => handleEditClick(medication)} />
                  <FaTrash onClick={() => handleDelete(medication._id)} />
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedicationTable;
