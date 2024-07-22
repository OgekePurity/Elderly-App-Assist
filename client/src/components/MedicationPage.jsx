import React, { useState, useEffect } from 'react';
import './MedicationPage.css'
import logoImg from "../img/logo.png";
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const MedicationForm = () => {
  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
  });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    const storedMedications = localStorage.getItem('medications');
    if (storedMedications) {
      setMedications(JSON.parse(storedMedications));
    }
  }, []);

  const handleAddMedication = (event) => {
    event.preventDefault();
    const updatedMedications = [...medications, newMedication];
    setMedications(updatedMedications);
    localStorage.setItem('medications', JSON.stringify(updatedMedications));
    setNewMedication({ name: '', dosage: '', frequency: '' });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewMedication({ ...newMedication, [name]: value });
  };

  const handleEdit = (index) => {
    setEditing(index);
  };

  const handleSaveEdit = (index) => {
    const updatedMedications = [...medications];
    updatedMedications[index] = newMedication;
    setMedications(updatedMedications);
    localStorage.setItem('medications', JSON.stringify(updatedMedications));
    setEditing(null);
    setNewMedication({ name: '', dosage: '', frequency: '' });
  };

  const handleDelete = (index) => {
    const updatedMedications = [...medications];
    updatedMedications.splice(index, 1);
    setMedications(updatedMedications);
    localStorage.setItem('medications', JSON.stringify(updatedMedications));
  };

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
    <div className="medication-form">
      <form onSubmit={handleAddMedication}>
        <label>
          Medication Name:
          <input type="text" name="name" value={newMedication.name} onChange={handleInputChange} />
        </label>
        <label>
          Dosage:
          <input type="text" name="dosage" value={newMedication.dosage} onChange={handleInputChange} />
        </label>
        <label>
          Frequency:
          <input type="text" name="frequency" value={newMedication.frequency} onChange={handleInputChange} />
        </label>
        <button type="submit">Add Medication</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Medication Name</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medications.map((medication, index) => (
            <tr key={index}>
              {editing === index ? (
                <td>
                  <input type="text" value={newMedication.name} onChange={handleInputChange} name="name" />
                </td>
              ) : (
                <td>{medication.name}</td>
              )}
              {editing === index ? (
                <td>
                  <input type="text" value={newMedication.dosage} onChange={handleInputChange} name="dosage" />
                </td>
              ) : (
                <td>{medication.dosage}</td>
              )}
              {editing === index ? (
                <td>
                  <input type="text" value={newMedication.frequency} onChange={handleInputChange} name="frequency" />
                </td>
              ) : (
                <td>{medication.frequency}</td>
              )}
              <td>
                {editing === index ? (
                  <button onClick={() => handleSaveEdit(index)}>Save</button>
                ) : (
                  <FaEdit onClick={() => handleEdit(index)}/>
                )}
                <FaTrash onClick={() => handleDelete(index)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default MedicationForm;