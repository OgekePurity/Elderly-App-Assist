// src/features/medications/medicationsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  medications: [],
  status: 'idle',
  error: null,
};

// Thunk for fetching medications
export const fetchMedications = createAsyncThunk('medications/fetchMedications', async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get('http://localhost:5000/api/medications', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

// Thunk for adding a medication
export const addMedication = createAsyncThunk(
  'medications/addMedication',
  async (newMedication) => {
    const token = localStorage.getItem('token');
    const response = await axios.post('http://localhost:5000/api/medications', newMedication, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

const medicationsSlice = createSlice({
  name: 'medications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMedications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMedications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.medications = action.payload;
      })
      .addCase(fetchMedications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch medications';
      })
      .addCase(addMedication.fulfilled, (state, action) => {
        state.medications.push(action.payload);
      });
  },
});

export default medicationsSlice.reducer;
