import React, { useState, useCallback } from 'react';
import "./DiaryEntryList.css";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteJournal, updateJournal, fetchJournals } from "../../redux/Slices/diarySlice";
import { BsFillPencilFill } from "react-icons/bs";

const JournalEntryList = ({ entries }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');

  if (!entries ||!Array.isArray(entries)) {
    console.error("Entries are not defined or not an array:", entries);
    return null;
  }

  const handleEdit = (entry) => {
    setEditing(entry._id);
    setUpdatedTitle(entry.title);
    setUpdatedContent(entry.content);
  };

  const handleSubmit = useCallback((entryId) => {
    dispatch(updateJournal({ id: entryId, title: updatedTitle, content: updatedContent }));
    setEditing(null);
    /* dispatch(fetchJournals()); // Fetch latest data after updating */
  }, [dispatch, updatedTitle, updatedContent]);

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Cannot delete journal entry with undefined ID");
      return;
    }
    try {
      await dispatch(deleteJournal(id));
      await dispatch(fetchJournals()); // Fetch latest data after deleting
    } catch (error) {
      console.error("Error deleting journal entry:", error);
    }
  };

  return (
    <div className="journal-entry-list">
      <h2>Your Journal Entries</h2>
      {entries.length === 0? (
        <p>No journal entries yet.</p>
      ) : (
        <ul>
          {entries.map((entry, index) => (
            <li key={index} className="journal-entry-item">
              {editing === entry._id? (
                <form className="form-element" onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(entry._id);
                }}>
                  <input
                    type="text"
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)}
                    placeholder="Title"
                  />
                  <textarea
                    value={updatedContent}
                    onChange={(e) => setUpdatedContent(e.target.value)}
                    placeholder="Content"
                  />
                  <button type="submit">Save</button>
                </form>
              ) : (
                <div>
                  <h3>{entry.title}</h3>
                  <p className="journal-entry-date">
                    {new Date(entry.date).toLocaleDateString()}
                  </p>
                  <p className="journal-entry-content">{entry.content}</p>
                </div>
              )}
              <div>
                <button className="update-button" onClick={() => handleEdit(entry)}>
                  <BsFillPencilFill />
                </button>
                <button className="delete-button" onClick={() => handleDelete(entry._id)}>
                  <BsTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JournalEntryList;