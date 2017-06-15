module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hey there! how are you doing?',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'Emma Stone',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Hello',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Federer',
    },
  },
];
