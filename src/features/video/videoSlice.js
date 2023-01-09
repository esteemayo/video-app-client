import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRandomVideos } from 'services/videoService';

export const fetchRandomVideos = createAsyncThunk(
  'videos/getRandomVideos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getRandomVideos();
      return data.videos;
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
        state.videos.push(payload);
      })
      .addCase(fetchRandomVideos.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false;
        state.isError = payload;
      })
  }
});

export const { reset } = videoSlice.actions;

export default videoSlice.reducer;
