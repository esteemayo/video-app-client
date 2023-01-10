import { configureStore } from '@reduxjs/toolkit';

import authSlice from 'features/auth/authSlice';
import videoSlice from 'features/video/videoSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    videos: videoSlice,
  },
});

export default store;
