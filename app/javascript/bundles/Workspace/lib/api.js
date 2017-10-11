import axios from 'axios';
import snakeobj from 'snakeobj';
import camelobj from 'camelobj';

const REACT_APP_API_HOST = 'http://localhost:3000';

axios.defaults.baseURL = REACT_APP_API_HOST;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.transformRequest = [
  ...axios.defaults.transformRequest,
  (data) => {
    if (!data) return undefined;
    if (data instanceof FormData) return data;
    return JSON.stringify(snakeobj(JSON.parse(data)));
  },
];
axios.defaults.transformResponse = [
  ...axios.defaults.transformResponse,
  data => camelobj(data),
];

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

