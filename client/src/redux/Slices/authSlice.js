import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Register user
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('https://elderly-app-assist-8.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Login user
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('https://elderly-app-assist-8.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) {
        return rejectWithValue(data);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: null,
    authError: null,
    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.status = 'succeeded1';
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        localStorage.setItem('accessToken', payload.accessToken); // Store accessToken in localStorage
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.authError = payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.status = 'succeeded2';
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        localStorage.setItem('accessToken', payload.accessToken); // Store accessToken in localStorage
        localStorage.setItem('refreshToken', payload.refreshToken); // Store refreshToken in localStorage
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.authError = payload;
      });
  },
});

export default authSlice.reducer;
