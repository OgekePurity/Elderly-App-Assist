import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import journalReducer from './Slices/journalSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    journals: journalReducer,
  },
});

export default store;
