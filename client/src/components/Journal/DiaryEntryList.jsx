import React from 'react';
import './DiaryEntryList.css';
import { BsTrash } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteJournal } from '../../redux/Slices/diarySlice';

const JournalEntryList = ({ entries }) => {
  const dispatch = useDispatch();

  if (!entries || !Array.isArray(entries)) {
    console.error('Entries are not defined or not an array:', entries);
    return null;
  }

  const handleDelete = async (id) => {
    if (!id) {
      console.error('Cannot delete journal entry with undefined ID');
      return;
    }
    try {
      await dispatch(deleteJournal(id));
    } catch (error) {
      console.error('Error deleting journal entry:', error);
    }
  };

  return (
    <div className="journal-entry-list">
      <h2>Your Journal Entries</h2>
      {entries.length === 0 ? (
        <p>No journal entries yet.</p>
      ) : (
        <ul>
          {entries.map((entry, index) => (
            <li key={index} className="journal-entry-item">
              <div>
              <h3>{entry.title}</h3>
              <p className="journal-entry-date">
                {new Date(entry.date).toLocaleDateString()}
              </p>
              <p className="journal-entry-content">{entry.content}</p>
              </div>
              <button className="delete-button" onClick={() => handleDelete(entry.id)}>
                <BsTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JournalEntryList;