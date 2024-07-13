import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJournalEntry } from '../../features/Journal/journalSlice';
import './AddJournalEntryForm.css';

const AddJournalEntryForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJournalEntry({ title, content }));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-journal-entry-form">
      <h2>Add New Journal Entry</h2>
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
