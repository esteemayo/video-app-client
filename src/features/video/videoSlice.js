import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as videoAPI from 'services/videoService';

export const fetchRandomVideos = createAsyncThunk(
  'videos/getRandomVideos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await videoAPI.getRandomVideos();
      return data.videos;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const fetchTrendingVideos = createAsyncThunk(
  'videos/getTrendingVideos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await videoAPI.getTrendingVideos();
      return data.videos;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const fetchSubscribeVideos = createAsyncThunk(
  'videos/getSubscribeVideos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await videoAPI.getSubscribedVideos();
      return data.list;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

const initialState = {
  videos: [],
  video: {},
  isLoading: false,
  isSuccess: false,
  isError: null,
};

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRandomVideos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.videos = payload;
      })
      .addCase(fetchRandomVideos.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false;
        state.isError = payload.message;
      })
      .addCase(fetchTrendingVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTrendingVideos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.videos = payload;
      })
      .addCase(fetchTrendingVideos.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false;
        state.isError = payload.message;
      })
      .addCase(fetchSubscribeVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSubscribeVideos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.videos = payload;
      })
      .addCase(fetchSubscribeVideos.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false;
        state.isError = payload.message;
      })
  }
});

export const { reset } = videoSlice.actions;

export default videoSlice.reducer;
