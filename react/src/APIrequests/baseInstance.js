import axios from 'axios';

const baseUrl = '/api';

let baseInstance = axios.create({
    baseURL: baseUrl,
});

baseInstance.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    return Promise.reject(error.response);
  });

export default baseInstance;