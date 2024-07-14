import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JournalEntryList from '../components/Journal/JournalEntryList';
import AddJournalEntryForm from '../components/Journal/AddJournalEntryForm';
import { fetchJournals, addJournal } from '../redux/Slices/journalSlice';
import logoImg from "../img/logo.png";
import './Journal.css';
import '../components/global.css'
import { Link } from 'react-router-dom';

const Journal = () => {
  const dispatch = useDispatch();
  const { items: entries, status, error } = useSelector((state) => state.journals);

  useEffect(() => {
    dispatch(fetchJournals());
  }, [dispatch]);

  return (
    <div className="journal-page wrapper">     
         <div className="nav">
        <div className="logo">
          <img src={logoImg} alt="logo" />
        </div>
        <div className="links">
          <Link to="/home" className="mainlink">
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/Profile">PROFILE</Link>
        </div>
      </div>
      <div className="bodylist">
      <AddJournalEntryForm />
      {status === 'loading' && <p>Loading journal entries...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && <JournalEntryList entries={entries} />}
      </div>
    </div>
  );
};

export default Journal;
