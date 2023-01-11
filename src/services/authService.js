import http from './httpService';
import { getFromStorage, tokenKey } from 'utils';

const apiEndpoint = '/auth';

export const login = (credentials) =>
  http.post(`${apiEndpoint}/signin`, credentials);

export const register = (credentials) =>
  http.post(`${apiEndpoint}/signup`, credentials);

export const getJwt = () => getFromStorage(tokenKey)?.token;
