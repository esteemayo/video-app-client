import http from './httpService';

const apiEndpoint = '/auth';

export const login = (credentials) =>
  http.post(`${apiEndpoint}/signin`, credentials);

export const register = (credentials) =>
  http.post(`${apiEndpoint}/signup`, credentials);
