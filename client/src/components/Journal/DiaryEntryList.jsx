import React from 'react';
import './DiaryEntryList.css';

const JournalEntryList = ({ entries }) => {
  // Check if entries is not defined or not an array
  if (!entries || !Array.isArray(entries)) {
    console.error('Entries are not defined or not an array:', entries);
    return null; // or handle this case as per your application's logic
  }

  return (
    <div className="journal-entry-list">
      <h2>Your Journal Entries</h2>
      {entries.length === 0 ? (
        <p>No journal entries yet.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id} className="journal-entry-item">
              <h3>{entry.title}</h3>
              <p className="journal-entry-date">
                {new Date(entry.date).toLocaleDateString()}
              </p>
              <p className="journal-entry-content">{entry.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JournalEntryList;
