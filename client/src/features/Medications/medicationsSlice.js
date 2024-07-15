import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  medications: [],
  status: 'idle',
  error: null,
};

export const fetchMedications = createAsyncThunk('medications/fetchMedications', async () => {
  const response = await axios.get('https://elderly-app-assist-8.onrender.com/api/medications');
  return response.data;
});

export const addMedication = createAsyncThunk('medications/addMedication', async (newMedication) => {
  const response = await axios.post('https://elderly-app-assist-8.onrender.com/api/medications', newMedication);
  return response.data;
});

export const deleteMedication = createAsyncThunk('medications/deleteMedication', async (id) => {
  await axios.delete(`https://elderly-app-assist-8.onrender.com/api/medications/${id}`);
  return id;
});

export const updateMedication = createAsyncThunk('medications/updateMedication', async (updatedMedication) => {
  const response = await axios.put(`https://elderly-app-assist-8.onrender.com/api/medications/${updatedMedication._id}`, updatedMedication);
  return response.data;
});

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
      })
      .addCase(deleteMedication.fulfilled, (state, action) => {
        state.medications = state.medications.filter((medication) => medication._id !== action.payload);
      })
      .addCase(updateMedication.fulfilled, (state, action) => {
        const index = state.medications.findIndex((medication) => medication._id === action.payload._id);
        if (index !== -1) {
          state.medications[index] = action.payload;
        }
      });
  },
});

export default medicationsSlice.reducer;
