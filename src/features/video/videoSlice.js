import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as userAPI from 'services/userService';
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

export const fetchVideo = createAsyncThunk(
  'videos/getVideoBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      const { data } = await videoAPI.getVideoBySlug(slug);
      return data.video;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const fetchCommentsOnVideo = createAsyncThunk(
  'videos/getCommentsOnVideo',
  async (videoId, { rejectWithValue }) => {
    try {
      const { data } = await videoAPI.getCommentsOnVideo(videoId);
      return data.comments;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const fetchRecommendedVideos = createAsyncThunk(
  'videos/recommendedVideos',
  async (tags, { rejectWithValue }) => {
    try {
      const { data } = await videoAPI.getVideosByTags(tags);
      return data.videos;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const searchVideos = createAsyncThunk(
  'videos/searchVideos',
  async (query, { rejectWithValue }) => {
    try {
      const { data } = await videoAPI.searchVideos(query);
      return data.videos;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const createNewVideo = createAsyncThunk(
  'videos/createVideo',
  async (video, { rejectWithValue }) => {
    try {
      const { data } = await videoAPI.createVideo({ ...video });
      return data.video;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const createComment = createAsyncThunk(
  'videos/createComment',
  async ({ videoId, comment }, { rejectWithValue }) => {
    try {
      const { data } = await videoAPI.createCommentOnVideo(videoId, comment);
      return data.comment;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const updateViews = createAsyncThunk(
  'videos/views',
  async (videoId, { rejectWithValue }) => {
    try {
      const { data } = await videoAPI.views(videoId);
      return data.video;
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const likeVideo = createAsyncThunk(
  'videos/likeVideo',
  async ({ videoId, userId }, { rejectWithValue }) => {
    try {
      await userAPI.likeVideo(videoId);
      return userId
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

export const dislikeVideo = createAsyncThunk(
  'videos/dislikeVideo',
  async ({ videoId, userId }, { rejectWithValue }) => {
    try {
      await userAPI.dislikeVideo(videoId);
      return userId
    } catch (err) {
      const message = err.response.data;
      return rejectWithValue(message);
    }
  });

const initialState = {
  videos: [],
  video: {},
  comments: [],
  recommendedVideos: [],
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
      .addCase(fetchVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.video = payload;
      })
      .addCase(fetchVideo.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false;
        state.isError = payload.message;
      })
      .addCase(fetchCommentsOnVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCommentsOnVideo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments = payload;
      })
      .addCase(fetchCommentsOnVideo.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false;
        state.isError = payload.message;
      })
      .addCase(fetchRecommendedVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecommendedVideos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.recommendedVideos = payload;
      })
      .addCase(fetchRecommendedVideos.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false;
        state.isError = payload.message;
      })
      .addCase(searchVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchVideos.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.videos = payload;
      })
      .addCase(searchVideos.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false;
        state.isError = payload.message;
      })
      .addCase(createNewVideo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewVideo.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.videos.push(payload);
        state.video = payload;
      })
      .addCase(createNewVideo.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false;
        state.isError = payload.message;
      })
      .addCase(createComment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createComment.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments.push(payload);
      })
      .addCase(createComment.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false;
        state.isError = payload.message;
      })
      .addCase(updateViews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateViews.fulfilled, (state, { meta, payload }) => {
        state.isLoading = false;
        state.isSuccess = true;

        const {
          arg: { videoId },
        } = meta;

        if (videoId) {
          state.videos.map((item) => item._id === videoId ? payload : item);
          state.recommendedVideos.map((item) => item._id === videoId ? payload : item);
          state.video = payload;
          state.video.views += 1;
        }
      })
      .addCase(updateViews.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = false;
        state.isError = payload.message;
      })
      .addCase(likeVideo.fulfilled, (state, { meta, payload }) => {
        const {
          arg: { userId },
        } = meta;

        if (userId) {
          if (!state.video.likes.includes(payload)) {
            state.video.likes.push(payload);
            state.video.dislikes.splice(
              state.video.dislikes.findIndex((userId) => userId === payload),
              1,
            );
          }
        }
      })
      .addCase(dislikeVideo.fulfilled, (state, { meta, payload }) => {
        const {
          arg: { userId },
        } = meta;

        if (userId) {
          if (!state.video.dislikes.includes(payload)) {
            state.video.dislikes.push(payload);
            state.video.likes.splice(
              state.video.likes.findIndex((userId) => userId === payload),
              1,
            );
          }
        }
      })
  },
});

export const { reset } = videoSlice.actions;

export default videoSlice.reducer;
