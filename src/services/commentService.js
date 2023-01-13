import http from './httpService';

const apiEndpoint = '/comments';

const commentUrl = (commentId) => `${apiEndpoint}/${commentId}`;

export const getComments = () => http.get(apiEndpoint);

export const getComment = (commentId) =>
  http.get(commentUrl(commentId));

export const createComment = (comment) =>
  http.post(apiEndpoint, comment);

export const updateComment = (commentId, comment) =>
  http.patch(commentUrl(commentId), comment);

export const deleteComment = (commentId) =>
  http.delete(commentUrl(commentId));
