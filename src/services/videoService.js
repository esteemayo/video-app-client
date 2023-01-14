import http from './httpService';

const apiEndpoint = '/videos';

const videoUrl = (videoId) => `${apiEndpoint}/${videoId}`;

export const getVideos = () => http.get(apiEndpoint);

export const getRandomVideos = () => http.get(`${apiEndpoint}/random`);

export const getTrendingVideos = () => http.get(`${apiEndpoint}/trend`);

export const getSubscribedVideos = () => http.get(`${apiEndpoint}/subscribe`);

export const getVideosByTags = (tags) =>
  http.get(`${apiEndpoint}/tags?tags=${tags}`);

export const searchVideos = (query) =>
  http.get(`${apiEndpoint}/search?q=${query}`);

export const getCommentsOnVideo = (videoId) =>
  http.get(`${videoUrl(videoId)}/comments`);

export const getVideoById = (videoId) => http.get(videoUrl(videoId));

export const getVideoBySlug = (slug) =>
  http.get(`${apiEndpoint}/details/${slug}`);

export const createVideo = (video) => http.post(apiEndpoint, video);

export const createCommentOnVideo = (videoId, comment) =>
  http.post(`${videoUrl(videoId)}/comments`, comment);

export const views = (videoId) =>
  http.patch(`${apiEndpoint}/view/${videoId}`);
