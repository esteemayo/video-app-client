import jwtDecode from 'jwt-decode';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as authAPI from 'services/authService';
import {
  clearStorage,
  getFromStorage,
  setToStorage,
  tokenKey,
} from 'utils';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ credentials, toast }, { rejectWithValue }) => {
    try {
      const { data } = await authAPI.login({ ...credentials });
      toast.success('Login successfully');
      return data.details;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const googleSignIn = createAsyncThunk(
  'auth/googleLogin',
  async ({ credentials, toast }, { rejectWithValue }) => {
    try {
      const { data } = await authAPI.googleLogin({ ...credentials });
      toast.success('Login successfully');
      return data;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

const token = authAPI.getJwt();
const user = getFromStorage(tokenKey);

const initialState = {
  user: user ?? null,
  isLoading: false,
  isSuccess: false,
  isError: null,
};

if (token) {
  const decoded = jwtDecode(token);
  const expiryDate = Date.now();

  if (expiryDate > decoded.exp * 1000) {
    clearStorage();
    initialState.user = null;
  }
}

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
        setToStorage(tokenKey, payload);
        state.user = payload;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.isError = payload.message;
      })
      .addCase(googleSignIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(googleSignIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        // setToStorage(tokenKey, payload);
        state.user = payload;
      })
      .addCase(googleSignIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.isError = payload.message;
      })
  }
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
