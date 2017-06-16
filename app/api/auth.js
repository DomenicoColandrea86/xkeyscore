import api from './api';

const auth = {
  login({ email, password }) {
    return api.post('authentication/login', { email, password });
  },
};

export default auth;
