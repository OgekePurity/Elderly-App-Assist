import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  entries: [],
  status: 'idle',
  error: null,
};

// Fetch journal entries with token check
export const fetchJournalEntries = createAsyncThunk('journal/fetchJournalEntries', async () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('No token found in localStorage');
  }
  const response = await axios.get('http://localhost:5000/api/journal', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

// Add new journal entry with token check
export const addJournalEntry = createAsyncThunk('journal/addJournalEntry', async (newEntry) => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('No token found in localStorage');
  }
  const response = await axios.post('http://localhost:5000/api/journal', newEntry, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJournalEntries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJournalEntries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entries = action.payload;
      })
      .addCase(fetchJournalEntries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addJournalEntry.fulfilled, (state, action) => {
        state.entries.push(action.payload);
      });
  },
});

export default journalSlice.reducer;
