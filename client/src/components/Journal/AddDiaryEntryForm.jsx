import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJournal, fetchJournals } from '../../redux/Slices/diarySlice';
import './addDiaryEntryForm.css';

const AddJournalEntryForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(addJournal({ title, content }));
      await dispatch(fetchJournals()); // Fetch journals again to update the list
      setTitle('');
      setContent('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-journal-entry-form">
      <h2>Add New Journal Entry</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddJournalEntryForm;
