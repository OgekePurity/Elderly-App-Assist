import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import medicationsReducer from '../features/Medications/medicationsSlice';
import appointmentsReducer from '../features/Appointment/appointmentsSlice';
import communityReducer from '../features/Community/communitySlice';
import journalReducer from '../features/Journal/journalSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    medications: medicationsReducer,
    appointments: appointmentsReducer,
    community: communityReducer,
    journal: journalReducer,
  },
});

export default store;
