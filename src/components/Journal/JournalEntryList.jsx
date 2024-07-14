import React from 'react';
import './JournalEntryList.css';

const JournalEntryList = ({ entries }) => {
  return (
    <div className="journal-entry-list">
      <h2>Your Journal Entries</h2>
      {entries.length === 0 ? (
        <p>No journal entries yet.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry._id} className="journal-entry-item">
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
