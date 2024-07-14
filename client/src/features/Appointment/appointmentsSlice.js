// src/features/appointments/appointmentsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  appointments: [],
  status: 'idle',
  error: null,
};

// Thunk for fetching appointments
export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get('http://localhost:5000/api/appointments', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

// Thunk for adding an appointment
export const addAppointment = createAsyncThunk('appointments/addAppointment', async (newAppointment) => {
  const token = localStorage.getItem('token');
  const response = await axios.post('http://localhost:5000/api/appointments', newAppointment, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addAppointment.fulfilled, (state, action) => {
        state.appointments.push(action.payload);
      });
  },
});

export default appointmentsSlice.reducer;
