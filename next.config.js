module.exports = {
  async redirects() {
    return [
      {
        destination: '/tournaments/hobbitInvitational',
        permanent: false,
        source: '/',
      },
    ];
  },
};
