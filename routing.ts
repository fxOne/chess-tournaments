export const routing = {
  de: {
    about: '/de/about',
    imprint: '/de/imprint',
    tournaments: {
      hobbitInvitational: {
        index: '/de/tournaments/hobbitInvitational',
        pairings: '/de/tournaments/hobbitInvitational/pairings',
        players: '/de/tournaments/hobbitInvitational/players',
        series: {
          games(gameId: number): string {
            return `/de/tournaments/hobbitInvitational/series/${gameId}`;
          },
        },
      },
    },
  },
};
