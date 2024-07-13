import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JournalEntryList from '../components/Journal/JournalEntryList';
import AddJournalEntryForm from '../components/Journal/AddJournalEntryForm';
import { fetchJournalEntries, addJournalEntry } from '../features/Journal/journalSlice';
import './Journal.css';
import { Link } from 'react-router-dom';

const Journal = () => {
  const dispatch = useDispatch();
  const { entries, status, error } = useSelector((state) => state.journal);

  useEffect(() => {
    dispatch(fetchJournalEntries());
  }, [dispatch]);

  return (
    <div className="journal-page">
      <Link to="/home" className="back-button">Back</Link>
      <AddJournalEntryForm onSubmit={(newEntry) => dispatch(addJournalEntry(newEntry))} />
      {status === 'loading' && <p>Loading journal entries...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <JournalEntryList entries={entries} />}
    </div>
  );
};

export default Journal;
