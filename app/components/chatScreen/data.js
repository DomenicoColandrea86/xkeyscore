module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Ya sure, 8pm?',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'Emma Stone',
      // avatar: 'https://facebook.github.io/react/img/logo_og.png'
    },
    // location: {
    //   latitude: 48.864601,
    //   longitude: 2.398704
    // },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Im good. Dinner tonight?',
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Federer',
    },
  },
];
