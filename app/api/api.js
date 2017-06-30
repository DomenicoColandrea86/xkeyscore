import axios from 'axios';

const create = (baseURL = 'https://app.rcanalytics.com/api') => {
  return axios.create({
    baseURL,
    headers: { 'Cache-Control': 'no-cache' },
    withCredentials: true,
    timeout: 10000,
  });
};

export default create();
