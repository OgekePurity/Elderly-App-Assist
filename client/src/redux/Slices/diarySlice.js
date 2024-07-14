import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks for async actions
export const fetchJournals = createAsyncThunk('api/journals', async () => {
  const response = await axios.get('https://elderly-app-assist-8.onrender.com/api/journals');
  return response.data;
});

export const addJournal = createAsyncThunk('journals/Journal', async (journal) => {
  const response = await axios.post('https://elderly-app-assist-8.onrender.com/api/journals/journal', journal);
  return response.data;
});

export const updateJournal = createAsyncThunk('journals/updateJournal', async (journal) => {
  const { id, ...journalData } = journal; // Destructure the ID from journal object
  const response = await axios.put(`https://elderly-app-assist-8.onrender.com/api/journals/${id}`, journalData); // Use journalData for PUT request
  return response.data;
});

export const deleteJournal = createAsyncThunk('/journals/deleteJournal', async (id) => {
  await axios.delete(`https://elderly-app-assist-8.onrender.com/api/journals/${id}`);
  return id;
});

const journalSlice = createSlice({
  name: 'journals',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJournals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJournals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchJournals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addJournal.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateJournal.fulfilled, (state, action) => {
        const updatedJournal = action.payload;
        const index = state.items.findIndex(journal => journal.id === updatedJournal.id);
        if (index !== -1) {
          state.items[index] = updatedJournal;
        }
      })
      .addCase(deleteJournal.fulfilled, (state, action) => {
        state.items = state.items.filter(journal => journal.id !== action.payload);
      });
  },
});

export default journalSlice.reducer;
