import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from 'services/authService';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ credentials, toast }, { rejectWithValue }) => {
    try {
      const { data } = await login({ ...credentials });
      toast.success('Login successfully');
      return data.details;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.isError = payload.message;
      })
  }
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
