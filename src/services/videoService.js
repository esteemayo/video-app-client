import http from './httpService';

const apiEndpoint = '/videos';

const videoUrl = (videoId) => `${apiEndpoint}/${videoId}`;

export const getVideos = () => http.get(apiEndpoint);

export const getRandomVideos = () => http.get(`${apiEndpoint}/random`);

export const getVideoById = (videoId) => http.get(videoUrl(videoId));

export const getVideoBySlug = (slug) =>
  http.get(`${apiEndpoint}/details/${slug}`);
