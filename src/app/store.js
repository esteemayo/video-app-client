import { configureStore } from '@reduxjs/toolkit';

import authSlice from 'features/user/userSlice';
import videoSlice from 'features/video/videoSlice';

const store = configureStore({
  reducer: {
    user: authSlice,
    videos: videoSlice,
  },
});

export default store;
