import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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
});

export default videoSlice.reducer;
