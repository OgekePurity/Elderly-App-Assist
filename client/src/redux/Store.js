import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import journalReducer from './Slices/diarySlice'; // Ensure correct import
import medicationsReducer from '../features/Medications/medicationsSlice';
import appointmentsReducer from '../features/Appointment/appointmentsSlice';
import communityReducer from '../features/Community/communitySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    journals: journalReducer,
    medications: medicationsReducer,
    appointments: appointmentsReducer,
    community: communityReducer,
    
  }
});

export default store;
