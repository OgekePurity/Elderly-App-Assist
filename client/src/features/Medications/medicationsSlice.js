// src/features/Medications/medicationsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  medications: [],
  status: 'idle',
  error: null,
};

// Thunk for fetching medications
export const fetchMedications = createAsyncThunk('medications/fetchMedications', async () => {
  const response = await axios.get('https://elderly-app-assist-8.onrender.com/api/medications');
  return response.data;
});

// Thunk for adding a medication
export const addMedication = createAsyncThunk(
  'medications/addMedication',
  async (newMedication) => {
    const response = await axios.post('https://elderly-app-assist-8.onrender.com/api/medications', newMedication);
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
        console.log('Medication added:', action.payload);
        console.log('Updated state:', state.medications);
      });
  },
});

export default medicationsSlice.reducer;
