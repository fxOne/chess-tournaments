export const routing = {
  de: {
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
      index: '/tournaments',
      lichessStreamerChampionship: {
        bracket: '/tournaments/lichessStreamerChampionship/bracket',
        index: '/tournaments/lichessStreamerChampionship',
        pairings: '/tournaments/lichessStreamerChampionship/pairings',
        players: '/tournaments/lichessStreamerChampionship/players',
        series: {
          games(gameId: number): string {
            return `/tournaments/lichessStreamerChampionship/series/${gameId}`;
          },
        },
      },
    },
  },
  index: '/',
};
