import http from './httpService';

const apiEndpoint = '/users';

const userUrl = (userId) => `${apiEndpoint}/${userId}`;

export const getUsers = () => http.get(apiEndpoint);

export const getUser = (userId) => http.get(userUrl(userId));

export const likeVideo = (videoId) =>
  http.patch(`${apiEndpoint}/like/${videoId}`);

export const dislikeVideo = (videoId) =>
  http.patch(`${apiEndpoint}/dislike/${videoId}`);
