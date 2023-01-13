import http from './httpService';

const apiEndpoint = '/videos';

const videoUrl = (videoId) => `${apiEndpoint}/${videoId}`;

export const getVideos = () => http.get(apiEndpoint);

export const getRandomVideos = () => http.get(`${apiEndpoint}/random`);

export const getTrendingVideos = () => http.get(`${apiEndpoint}/trend`);

export const getSubscribedVideos = () => http.get(`${apiEndpoint}/subscribe`);

export const getCommentsOnVideo = (videoId) =>
  http.get(`${videoUrl(videoId)}/comments`);

export const getVideoById = (videoId) => http.get(videoUrl(videoId));

export const getVideoBySlug = (slug) =>
  http.get(`${apiEndpoint}/details/${slug}`);
