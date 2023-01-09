import { configureStore } from '@reduxjs/toolkit';
import videoSlice from 'features/video/videoSlice';

const store = configureStore({
  reducer: {
    videos: videoSlice,
  },
});

export default store;
