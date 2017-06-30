import { Record } from 'immutable';

export const User = new Record(
  {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    email: '',
    stateProv: '',
    accountUserId: null,
    accountAdmin_fg: false,
    systemAdmin_fg: false,
    exp: null,
    sessionId: '',
  },
  'User',
);

export default User;
