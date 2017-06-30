import api from './api';

const auth = {
  login({ email, password }) {
    return api.post('/v2/authentication/login', { email, password });
  },
};

export default auth;
