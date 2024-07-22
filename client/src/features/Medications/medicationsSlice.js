import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  medications: [],
  status: 'idle',
  error: null,
};

export const fetchMedications = createAsyncThunk(
  'medications/fetchMedications',
  async (_, { getState }) => {
    const state = getState();
    const token = state.auth.accessToken;

    const response = await axios.get('https://elderly-app-assist-8.onrender.com/api/medications', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);

export const addMedication = createAsyncThunk('medications/addMedication', async (newMedication, { rejectWithValue }) => {
  try {
    const response = await axios.post('https://elderly-app-assist-8.onrender.com/api/medications', newMedication, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding medication:', error.response?.data || error.message); // Enhanced error logging
    return rejectWithValue(error.response?.data || error.message);
  }
});



export const deleteMedication = createAsyncThunk(
  'medications/deleteMedication',
  async (id, { getState }) => {
    const state = getState();
    const token = state.auth.accessToken;

    await axios.delete(`https://elderly-app-assist-8.onrender.com/api/medications/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return id;
  }
);

export const updateMedication = createAsyncThunk(
  'medications/updateMedication',
  async (updatedMedication, { getState }) => {
    const state = getState();
    const token = state.auth.accessToken;

    const response = await axios.put(
      `https://elderly-app-assist-8.onrender.com/api/medications/${updatedMedication._id}`,
      updatedMedication,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
