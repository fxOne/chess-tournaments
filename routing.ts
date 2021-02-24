export const routing = {
  about: '/about',
  imprint: '/imprint',
  tournaments: {
    hobbitInvitational: {
      index: '/tournaments/hobbitInvitational',
      pairings: '/tournaments/hobbitInvitational/pairings',
      players: '/tournaments/hobbitInvitational/players',
      series: {
        games(gameId: number): string {
          return `/tournaments/hobbitInvitational/series/${gameId}`;
        },
      },
    },
  },
};
