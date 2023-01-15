import jwtDecode from 'jwt-decode';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as authAPI from 'services/authService';
import * as userAPI from 'services/userService';
import {
  clearStorage,
  getFromStorage,
  setToStorage,
  tokenKey,
} from 'utils';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ credentials, toast }, { rejectWithValue }) => {
    try {
      const { data } = await authAPI.register({ ...credentials });
      toast.success('Registration successful');
      return data.details;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

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

export const subscription = createAsyncThunk(
  'users/subscribe',
  async (channelId, { rejectWithValue }) => {
    try {
      await userAPI.subscribe(channelId);
      return channelId;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const unsubscribe = createAsyncThunk(
  'users/unsubscribe',
  async (channelId, { rejectWithValue }) => {
    try {
      await userAPI.unsubscribe(channelId);
      return channelId;
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
    setLogout: (state) => {
      clearStorage();
      state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        setToStorage(tokenKey, payload);
        state.user = payload;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.isError = payload.message;
      })
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
        setToStorage(tokenKey, payload);
        state.user = payload;
      })
      .addCase(googleSignIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = null;
        state.isError = payload.message;
      })
      .addCase(subscription.fulfilled, (state, { payload }) => {
        if (!state.user.subscribedUsers.includes(payload)) {
          state.user.subscribedUsers.push(payload);
        }
      })
      .addCase(unsubscribe.fulfilled, (state, { payload }) => {
        if (state.user.subscribedUsers.includes(payload)) {
          state.user.subscribedUsers.splice(
            state.user.subscribedUsers.findIndex((channelId) => channelId === payload),
            1,
          );
          state.user.subscribers--;
        }
      })
  }
});

export const { reset, setLogout } = authSlice.actions;

export default authSlice.reducer;
