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
      lichessStreamerChampionship: {
        index: '/de/tournaments/lichessStreamerChampionship',
        pairings: '/de/tournaments/lichessStreamerChampionship/pairings',
        players: '/de/tournaments/lichessStreamerChampionship/players',
        series: {
          games(gameId: number): string {
            return `/de/tournaments/lichessStreamerChampionship/series/${gameId}`;
          },
        },
      },
    },
  },
};
