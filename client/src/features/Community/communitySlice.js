// src/features/community/communitySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

// Thunk for fetching community posts
export const fetchCommunityPosts = createAsyncThunk('community/fetchCommunityPosts', async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get('http://localhost:5000/api/community', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

// Thunk for adding a community post
export const addCommunityPost = createAsyncThunk('community/addCommunityPost', async (newPost) => {
  const token = localStorage.getItem('token');
  const response = await axios.post('http://localhost:5000/api/community', newPost, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommunityPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCommunityPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchCommunityPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCommunityPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default communitySlice.reducer;
