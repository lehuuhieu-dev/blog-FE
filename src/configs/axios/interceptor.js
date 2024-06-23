import axios from 'axios';

import { api, common } from '../constants';

const Interceptor = () => {
  axios.defaults.baseURL = api.BASE_URL;

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem(common.LOCAL_STORAGE_KEYS.TOKEN);
      config.headers.Authorization = token;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      // Handle server error
      if (error.response.status.toString().startsWith('5')) {
        return Promise.reject('Internal Server Error!!!');
      }

      // Clear access token
      if (error.response.status === 401) {
        localStorage.removeItem(common.LOCAL_STORAGE_KEYS.TOKEN);
      }

      return Promise.reject(error);
    }
  );
};

export { Interceptor };
