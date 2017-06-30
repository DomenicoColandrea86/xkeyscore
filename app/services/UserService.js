import base64 from 'base-64';

import api from '../api';
import Models from '../models';

const UserService = {
  getUserFromJwt: jwt => {
    // ensure jwt is string
    if (typeof jwt !== 'string') return null;

    // ensure jwt is fully qualified
    const jwtSegments = jwt.split('.');
    if (jwtSegments.length !== 3) return null;

    return api.user.personal().then(({ data }) => {
      return new Models.User({
        ...JSON.parse(base64.decode(jwtSegments[1])),
        ...data,
      });
    });
  },
};

Object.freeze(UserService);
export default UserService;
