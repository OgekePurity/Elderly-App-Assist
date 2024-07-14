import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunks for async actions
export const fetchJournals = createAsyncThunk('journals/fetchJournals', async () => {
  const response = await axios.get('https://elderly-app-assist-8.onrender.com/api/journals');
  return response.data;
});

export const addJournal = createAsyncThunk('journals/addJournal', async (journal) => {
  const response = await axios.post('https://elderly-app-assist-8.onrender.com/api/journals/journal', journal);
  return response.data;
});

export const updateJournal = createAsyncThunk('journals/updateJournal', async (journal) => {
  const response = await axios.put(`https://elderly-app-assist-8.onrender.com/api/journals/${journal.id}`, journal);
  return response.data;
});

export const deleteJournal = createAsyncThunk('journals/deleteJournal', async (id) => {
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
        const index = state.items.findIndex(journal => journal.id === action.payload.id);
        state.items[index] = action.payload;
      })
      .addCase(deleteJournal.fulfilled, (state, action) => {
        state.items = state.items.filter(journal => journal.id !== action.payload);
      });
  },
});

export default journalSlice.reducer;
