module.exports = {
  async redirects() {
    return [
      {
        destination: '/de/tournaments/hobbitInvitational',
        permanent: false,
        source: '/',
      },
      {
        destination: '/de/tournaments/hobbitInvitational',
        permanent: false,
        source: '/tournaments/hobbitInvitational',
      },
    ];
  },
};
