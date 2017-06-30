import api from './api';

const user = {
  personal() {
    return api.get('/v1/accountUser/personal');
  },
};

export default user;
