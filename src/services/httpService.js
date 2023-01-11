import Axios from 'axios';
import { toast } from 'react-toastify';

import logger from './logService';
import { getJwt } from './authService';

const devEnv = process.env.NODE_ENV !== 'production';
const { REACT_APP_API_DEV_URL, REACT_APP_API_PROD_URL } = process.env;

const authFetch = Axios.create({
  baseURL: devEnv ? REACT_APP_API_DEV_URL : REACT_APP_API_PROD_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

authFetch.interceptors.request.use(
  (req) => {
    req.headers.common['Authorization'] = `Bearer ${getJwt()}`;
    return req;
  },
  (error) => {
    logger.log(error);
    return Promise.reject(error);
  });

authFetch.interceptors.response.use(null, (error) => {
  const expectedError = error.response &&
    error.response.status >= 400 &&
    error.response &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error('An unexpected error occurred');
    return Promise.reject(error);
  }
});

const http = {
  get: authFetch.get,
  post: authFetch.post,
  patch: authFetch.patch,
  delete: authFetch.delete,
};

export default http;
