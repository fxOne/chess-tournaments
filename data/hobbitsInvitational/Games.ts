export interface Game {
  lichessUrl: string;
  userIdWhite: number;
  userIdBlack: number;
  result: 0 | 0.5 | 1;
}

export interface Series {
  games: Game[];
}

export interface Match {
  id: number;
  date: string;
  series: Series[];
  player1: number | null;
  player2: number | null;
  videoUrl: string;
}

export const matches: Record<number, Match> = {
  1: {
    date: '20.01.2021',
    id: 1,
    player1: 1,
    player2: 2,
    series: [
      //#region 5+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/yOb0gbSD',
            result: 1,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/NmnioT5m',
            result: 0,
            userIdBlack: 2,
            userIdWhite: 1,
          },
          {
            lichessUrl: 'https://lichess.org/YEJWKXT9',
            result: 1,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/9jG6gyWj',
            result: 0,
            userIdBlack: 2,
            userIdWhite: 1,
          },
          {
            lichessUrl: 'https://lichess.org/abWdpBb3',
            result: 1,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/WHGNjZVm',
            result: 0.5,
            userIdBlack: 2,
            userIdWhite: 1,
          },
          {
            lichessUrl: 'https://lichess.org/Wtyq1MGF',
            result: 0,
            userIdBlack: 1,
            userIdWhite: 2,
          },
        ],
      },
      //#endregion
      //#region 3+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/w1pUUaXC',
            result: 0.5,
            userIdBlack: 2,
            userIdWhite: 1,
          },
          {
            lichessUrl: 'https://lichess.org/0yWuVbBm',
            result: 1,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/0585mgtb',
            result: 1,
            userIdBlack: 2,
            userIdWhite: 1,
          },
          {
            lichessUrl: 'https://lichess.org/SBX95KsD',
            result: 0.5,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/Y5TvxlBC',
            result: 0,
            userIdBlack: 2,
            userIdWhite: 1,
          },

          {
            lichessUrl: 'https://lichess.org/QbhzdZrS',
            result: 1,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/oKzKNqpQ',
            result: 1,
            userIdBlack: 2,
            userIdWhite: 1,
          },
          {
            lichessUrl: 'https://lichess.org/TNscvXIx',
            result: 1,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/lylc9GFs',
            result: 0,
            userIdBlack: 2,
            userIdWhite: 1,
          },
        ],
      },
      //#endregion
      //#region 1+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/SbYWQAkc',
            result: 0,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/UgQfdjqS',
            result: 1,
            userIdBlack: 2,
            userIdWhite: 1,
          },
          {
            lichessUrl: 'https://lichess.org/1rjjMnsj',
            result: 1,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/Gz2dtywe',
            result: 0.5,
            userIdBlack: 2,
            userIdWhite: 1,
          },
          {
            lichessUrl: 'https://lichess.org/DIU98NbN',
            result: 1,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/vezkRpfQ',
            result: 1,
            userIdBlack: 2,
            userIdWhite: 1,
          },
          {
            lichessUrl: 'https://lichess.org/7SsHuDTv',
            result: 0,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/erbd9yin',
            result: 1,
            userIdBlack: 2,
            userIdWhite: 1,
          },
          {
            lichessUrl: 'https://lichess.org/tbOQTyBX',
            result: 0,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/FcUJWZAZ',
            result: 1,
            userIdBlack: 2,
            userIdWhite: 1,
          },
          {
            lichessUrl: 'https://lichess.org/ViYO7vRX',
            result: 0,
            userIdBlack: 1,
            userIdWhite: 2,
          },
          {
            lichessUrl: 'https://lichess.org/GmVGE97H',
            result: 0,
            userIdBlack: 1,
            userIdWhite: 2,
          },
        ],
      },
      //#endregion
    ],
    videoUrl: 'https://www.youtube.com/watch?v=9BpXMFX0poY',
  },
  10: {
    date: 'unbekannt',
    id: 10,
    player1: 12,
    player2: 14,
    series: [],
    videoUrl: '',
  },
  11: {
    date: 'unbekannt',
    id: 1,
    player1: null,
    player2: null,
    series: [],
    videoUrl: '',
  },
  12: {
    date: 'unbekannt',
    id: 12,
    player1: null,
    player2: null,
    series: [],
    videoUrl: '',
  },
  13: {
    date: 'unbekannt',
    id: 13,
    player1: null,
    player2: null,
    series: [],
    videoUrl: '',
  },
  2: {
    date: '15.01.2021',
    id: 2,
    player1: 5,
    player2: 6,
    series: [
      //#region 5+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/PWasFaSo',
            result: 0.5,
            userIdBlack: 5,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/jGNB8ToU',
            result: 0,
            userIdBlack: 6,
            userIdWhite: 5,
          },
          {
            lichessUrl: 'https://lichess.org/SAdZXkkU',
            result: 1,
            userIdBlack: 5,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/OUOfHpX3',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 5,
          },
          {
            lichessUrl: 'https://lichess.org/eeOJmppn',
            result: 0.5,
            userIdBlack: 5,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/TbFJukDr',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 5,
          },
          {
            lichessUrl: 'https://lichess.org/rsIO3CBr',
            result: 0,
            userIdBlack: 5,
            userIdWhite: 6,
          },
        ],
      },
      //#endregion
      //#region 3+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/g4x7SZLb',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 5,
          },
          {
            lichessUrl: 'https://lichess.org/s3GHkDzt',
            result: 1,
            userIdBlack: 5,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/h7WxCUAV',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 5,
          },
          {
            lichessUrl: 'https://lichess.org/q31cWdmw',
            result: 0.5,
            userIdBlack: 5,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/ked03O9u',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 5,
          },

          {
            lichessUrl: 'https://lichess.org/xNDHl7yY',
            result: 0,
            userIdBlack: 5,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/ulD17zaO',
            result: 0.5,
            userIdBlack: 6,
            userIdWhite: 5,
          },
          {
            lichessUrl: 'https://lichess.org/0dw6g7Ek',
            result: 0.5,
            userIdBlack: 5,
            userIdWhite: 6,
          },
        ],
      },
      //#endregion
      //#region 1+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/qHBtz0D8',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 5,
          },
          {
            lichessUrl: 'https://lichess.org/5XQb3nqE',
            result: 1,
            userIdBlack: 5,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/1NZB60x8',
            result: 0,
            userIdBlack: 6,
            userIdWhite: 5,
          },
          {
            lichessUrl: 'https://lichess.org/GMnapfdT',
            result: 0,
            userIdBlack: 5,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/iL1tMwg2',
            result: 0,
            userIdBlack: 6,
            userIdWhite: 5,
          },
          {
            lichessUrl: 'https://lichess.org/WpTLIePn',
            result: 1,
            userIdBlack: 5,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/HTVvQI6o',
            result: 0,
            userIdBlack: 6,
            userIdWhite: 5,
          },
          {
            lichessUrl: 'https://lichess.org/Cs4Yl95Z',
            result: 0.5,
            userIdBlack: 5,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/hYiixM3R',
            result: 0.5,
            userIdBlack: 6,
            userIdWhite: 5,
          },
          {
            lichessUrl: 'https://lichess.org/k9hVJBzy',
            result: 0.5,
            userIdBlack: 5,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/AovfIy1l',
            result: 0,
            userIdBlack: 6,
            userIdWhite: 5,
          },
        ],
      },
      //#endregion
    ],
    videoUrl: 'https://www.youtube.com/watch?v=YJkoK-M4n0E',
  },
  3: {
    date: '10.01.2021',
    id: 3,
    player1: 3,
    player2: 4,
    series: [
      //#region 5+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/T8FYVAm1',
            result: 0,
            userIdBlack: 4,
            userIdWhite: 3,
          },
          {
            lichessUrl: 'https://lichess.org/7Zk4Vypr',
            result: 0,
            userIdBlack: 3,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/P6ttFlJD',
            result: 0.5,
            userIdBlack: 4,
            userIdWhite: 3,
          },
          {
            lichessUrl: 'https://lichess.org/16TvZKky',
            result: 1,
            userIdBlack: 3,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/xs1VTXTH',
            result: 1,
            userIdBlack: 4,
            userIdWhite: 3,
          },
          {
            lichessUrl: 'https://lichess.org/oOHAO3yy',
            result: 1,
            userIdBlack: 3,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/NpxgIrfO',
            result: 1,
            userIdBlack: 4,
            userIdWhite: 3,
          },
        ],
      },
      //#endregion
      //#region 3+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/HIgAwZJw',
            result: 0.5,
            userIdBlack: 3,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/X4ftbrdG',
            result: 1,
            userIdBlack: 4,
            userIdWhite: 3,
          },
          {
            lichessUrl: 'https://lichess.org/1jg2sjDl',
            result: 1,
            userIdBlack: 3,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/mckJC4lZ',
            result: 0,
            userIdBlack: 4,
            userIdWhite: 3,
          },
          {
            lichessUrl: 'https://lichess.org/s3P42Tgd',
            result: 0.5,
            userIdBlack: 3,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/dtSKhSAm',
            result: 1,
            userIdBlack: 4,
            userIdWhite: 3,
          },
          {
            lichessUrl: 'https://lichess.org/zv26Xy34',
            result: 1,
            userIdBlack: 3,
            userIdWhite: 4,
          },
        ],
      },
      //#endregion
      //#region 1+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/sVitBvl9',
            result: 1,
            userIdBlack: 3,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/wghnOtUQ',
            result: 0.5,
            userIdBlack: 4,
            userIdWhite: 3,
          },
          {
            lichessUrl: 'https://lichess.org/Bj9YGn59',
            result: 1,
            userIdBlack: 3,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/r0PC6Jt3',
            result: 1,
            userIdBlack: 4,
            userIdWhite: 3,
          },
          {
            lichessUrl: 'https://lichess.org/TIk7p8oK',
            result: 1,
            userIdBlack: 3,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/MJv7yiFg',
            result: 0,
            userIdBlack: 4,
            userIdWhite: 3,
          },
          {
            lichessUrl: 'https://lichess.org/TEcFlvBx',
            result: 0,
            userIdBlack: 3,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/B3ITAvDw',
            result: 0,
            userIdBlack: 4,
            userIdWhite: 3,
          },
          {
            lichessUrl: 'https://lichess.org/EQrqF12U',
            result: 0,
            userIdBlack: 3,
            userIdWhite: 4,
          },
        ],
      },
      //#endregion
    ],
    videoUrl: 'https://www.youtube.com/watch?v=JTzGX65SkPI',
  },
  4: {
    date: 'unbekannt',
    id: 4,
    player1: 10,
    player2: 11,
    series: [],
    videoUrl: 'https://www.youtube.com/watch?v=JTzGX65SkPI',
  },
  5: {
    date: '24.01.2021',
    id: 5,
    player1: 12,
    player2: 13,
    series: [
      //#region 5+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/cuKjGRNl',
            result: 0,
            userIdBlack: 12,
            userIdWhite: 13,
          },
          {
            lichessUrl: 'https://lichess.org/JQXDEohv',
            result: 0.5,
            userIdBlack: 13,
            userIdWhite: 12,
          },
          {
            lichessUrl: 'https://lichess.org/omNk3HaR',
            result: 0,
            userIdBlack: 12,
            userIdWhite: 13,
          },
          {
            lichessUrl: 'https://lichess.org/E2x17auZ',
            result: 1,
            userIdBlack: 13,
            userIdWhite: 12,
          },
          {
            lichessUrl: 'https://lichess.org/z699sAvL',
            result: 0,
            userIdBlack: 12,
            userIdWhite: 13,
          },
          {
            lichessUrl: 'https://lichess.org/RZ57C9XE',
            result: 1,
            userIdBlack: 13,
            userIdWhite: 12,
          },
          {
            lichessUrl: 'https://lichess.org/UjT6VRCp',
            result: 1,
            userIdBlack: 12,
            userIdWhite: 13,
          },
        ],
      },
      //#endregion
      //#region 3+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/oFZN0G6M',
            result: 0,
            userIdBlack: 13,
            userIdWhite: 12,
          },
          {
            lichessUrl: 'https://lichess.org/Uwct7SvS',
            result: 0,
            userIdBlack: 12,
            userIdWhite: 13,
          },
          {
            lichessUrl: 'https://lichess.org/iC7UW2h9',
            result: 1,
            userIdBlack: 13,
            userIdWhite: 12,
          },
          {
            lichessUrl: 'https://lichess.org/m0WMSH6b',
            result: 0.5,
            userIdBlack: 12,
            userIdWhite: 13,
          },
          {
            lichessUrl: 'https://lichess.org/pKqmWIXG',
            result: 0.5,
            userIdBlack: 13,
            userIdWhite: 12,
          },

          {
            lichessUrl: 'https://lichess.org/8M9Sp7aw',
            result: 0,
            userIdBlack: 12,
            userIdWhite: 13,
          },
          {
            lichessUrl: 'https://lichess.org/qPqlIYCq',
            result: 0.5,
            userIdBlack: 13,
            userIdWhite: 12,
          },
          {
            lichessUrl: 'https://lichess.org/yrF4tjdX',
            result: 0,
            userIdBlack: 12,
            userIdWhite: 13,
          },
          {
            lichessUrl: 'https://lichess.org/vkP7HkDK',
            result: 1,
            userIdBlack: 13,
            userIdWhite: 12,
          },
        ],
      },
      //#endregion
      //#region 1+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/DBQvRWhN',
            result: 0,
            userIdBlack: 13,
            userIdWhite: 12,
          },
          {
            lichessUrl: 'https://lichess.org/HemV1EK6',
            result: 0.5,
            userIdBlack: 12,
            userIdWhite: 13,
          },
          {
            lichessUrl: 'https://lichess.org/02GFj2iP',
            result: 0,
            userIdBlack: 13,
            userIdWhite: 12,
          },
          {
            lichessUrl: 'https://lichess.org/1d8tE3By',
            result: 1,
            userIdBlack: 12,
            userIdWhite: 13,
          },
          {
            lichessUrl: 'https://lichess.org/7aoXYyaq',
            result: 1,
            userIdBlack: 13,
            userIdWhite: 12,
          },

          {
            lichessUrl: 'https://lichess.org/JM8a8U6U',
            result: 1,
            userIdBlack: 12,
            userIdWhite: 13,
          },
          {
            lichessUrl: 'https://lichess.org/O4shTBPb',
            result: 0,
            userIdBlack: 13,
            userIdWhite: 12,
          },
          {
            lichessUrl: 'https://lichess.org/rbSYDQTG',
            result: 1,
            userIdBlack: 12,
            userIdWhite: 13,
          },
        ],
      },
      //#endregion
    ],
    videoUrl: 'https://www.twitch.tv/videos/886383476',
  },
  6: {
    date: '31.01.2021',
    id: 6,
    player1: 14,
    player2: 10,
    series: [
      //#region 5+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/JbD4KBdF',
            result: 0.5,
            userIdBlack: 14,
            userIdWhite: 10,
          },
          {
            lichessUrl: 'https://lichess.org/M3zNruNV',
            result: 0,
            userIdBlack: 10,
            userIdWhite: 14,
          },
          {
            lichessUrl: 'https://lichess.org/2zHHlCPO',
            result: 1,
            userIdBlack: 14,
            userIdWhite: 10,
          },
          {
            lichessUrl: 'https://lichess.org/OLeV146U',
            result: 1,
            userIdBlack: 10,
            userIdWhite: 14,
          },
          {
            lichessUrl: 'https://lichess.org/zFQnhDdl',
            result: 1,
            userIdBlack: 14,
            userIdWhite: 10,
          },

          {
            lichessUrl: 'https://lichess.org/j3MsYnKJ',
            result: 1,
            userIdBlack: 10,
            userIdWhite: 14,
          },
          {
            lichessUrl: 'https://lichess.org/U2xdutdl',
            result: 1,
            userIdBlack: 14,
            userIdWhite: 10,
          },
        ],
      },
      //#endregion
      //#region 3+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/cqcqkLF7',
            result: 1,
            userIdBlack: 10,
            userIdWhite: 14,
          },
          {
            lichessUrl: 'https://lichess.org/S1P19a89',
            result: 1,
            userIdBlack: 14,
            userIdWhite: 10,
          },
          {
            lichessUrl: 'https://lichess.org/5RwSisEJ',
            result: 0,
            userIdBlack: 10,
            userIdWhite: 14,
          },
          {
            lichessUrl: 'https://lichess.org/mnZoWtLH',
            result: 0.5,
            userIdBlack: 14,
            userIdWhite: 10,
          },
          {
            lichessUrl: 'https://lichess.org/x3fOiUJl',
            result: 0,
            userIdBlack: 10,
            userIdWhite: 14,
          },

          {
            lichessUrl: 'https://lichess.org/A9T2Kj9L',
            result: 1,
            userIdBlack: 14,
            userIdWhite: 10,
          },
          {
            lichessUrl: 'https://lichess.org/FAqeQY5s',
            result: 1,
            userIdBlack: 10,
            userIdWhite: 14,
          },
        ],
      },
      //#endregion
      //#region 1+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/utVJyOdH',
            result: 0,
            userIdBlack: 10,
            userIdWhite: 14,
          },
          {
            lichessUrl: 'https://lichess.org/V2Xyk6hU',
            result: 1,
            userIdBlack: 14,
            userIdWhite: 10,
          },
          {
            lichessUrl: 'https://lichess.org/j6DNftLH',
            result: 0,
            userIdBlack: 10,
            userIdWhite: 14,
          },
          {
            lichessUrl: 'https://lichess.org/yWRJYNiZ',
            result: 0,
            userIdBlack: 14,
            userIdWhite: 10,
          },
          {
            lichessUrl: 'https://lichess.org/VL4bPcsg',
            result: 1,
            userIdBlack: 10,
            userIdWhite: 14,
          },
          {
            lichessUrl: 'https://lichess.org/bqHQ1pv9',
            result: 1,
            userIdBlack: 14,
            userIdWhite: 10,
          },
          {
            lichessUrl: 'https://lichess.org/hFwLpXPJ',
            result: 1,
            userIdBlack: 10,
            userIdWhite: 14,
          },
          {
            lichessUrl: 'https://lichess.org/wrPwjYeB',
            result: 0,
            userIdBlack: 14,
            userIdWhite: 10,
          },
          {
            lichessUrl: 'https://lichess.org/LibGsJ1E',
            result: 1,
            userIdBlack: 10,
            userIdWhite: 14,
          },
        ],
      },
      //#endregion
    ],
    videoUrl: 'https://www.youtube.com/watch?v=6urRT-UgFc8',
  },
  7: {
    date: 'unbekannt',
    id: 7,
    player1: 7,
    player2: 2,
    series: [],
    videoUrl: '',
  },
  8: {
    date: '04.02.2021',
    id: 8,
    player1: 4,
    player2: 6,
    series: [
      //#region 5+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/nsRbIsTL',
            result: 0,
            userIdBlack: 6,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/zpAIzoN3',
            result: 0,
            userIdBlack: 4,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/poPjWFjc',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/7ENwcTAP',
            result: 1,
            userIdBlack: 4,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/KSFRMTnG',
            result: 0,
            userIdBlack: 6,
            userIdWhite: 4,
          },

          {
            lichessUrl: 'https://lichess.org/bHXRdnDz',
            result: 0,
            userIdBlack: 4,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/8H2zuSly',
            result: 0,
            userIdBlack: 6,
            userIdWhite: 4,
          },
        ],
      },
      //#endregion
      //#region 3+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/o5Jp7E28',
            result: 0,
            userIdBlack: 4,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/8Kmi0vgp',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/dQLNqJk5',
            result: 1,
            userIdBlack: 4,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/3A0r4xvm',
            result: 0,
            userIdBlack: 6,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/OONlxK8a',
            result: 0.5,
            userIdBlack: 4,
            userIdWhite: 6,
          },

          {
            lichessUrl: 'https://lichess.org/0vowDZBB',
            result: 0,
            userIdBlack: 6,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/oTWav1vJ',
            result: 0,
            userIdBlack: 4,
            userIdWhite: 6,
          },
        ],
      },
      //#endregion
      //#region 1+1
      {
        games: [
          {
            lichessUrl: 'https://lichess.org/RMqMYw0J',
            result: 1,
            userIdBlack: 4,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/xqsNU5HE',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/jNIRQ5Y9',
            result: 0.5,
            userIdBlack: 4,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/XnvqMEZe',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/Jj3mrpnn',
            result: 1,
            userIdBlack: 4,
            userIdWhite: 6,
          },

          {
            lichessUrl: 'https://lichess.org/XLaQo0DG',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/9kQmjZuW',
            result: 0,
            userIdBlack: 4,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/fky26Ysy',
            result: 1,
            userIdBlack: 6,
            userIdWhite: 4,
          },
          {
            lichessUrl: 'https://lichess.org/C1Zqil6G',
            result: 0,
            userIdBlack: 4,
            userIdWhite: 6,
          },
          {
            lichessUrl: 'https://lichess.org/6XF4Jq6c',
            result: 0.5,
            userIdBlack: 6,
            userIdWhite: 4,
          },

          {
            lichessUrl: 'https://lichess.org/PJvIOgIA',
            result: 0,
            userIdBlack: 4,
            userIdWhite: 6,
          },
        ],
      },
      //#endregion
    ],
    videoUrl: 'https://www.twitch.tv/videos/900844050',
  },
  9: {
    date: 'unbekannt',
    id: 9,
    player1: 8,
    player2: 10,
    series: [],
    videoUrl: '',
  },
};