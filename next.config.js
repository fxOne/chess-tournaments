module.exports = {
  async redirects() {
    return [
      {
        destination: '/de/tournaments',
        permanent: false,
        source: '/',
      },
    ];
  },
};
