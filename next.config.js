module.exports = {
  async redirects() {
    return [
      {
        destination: '/de/tournaments',
        permanent: false,
        source: '/de',
      },
      {
        destination: '/en/tournaments',
        permanent: false,
        source: '/en',
      },
      {
        destination: '/de/tournaments',
        permanent: false,
        source: '/',
      },
    ];
  },
};
