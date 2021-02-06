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
  player1: number;
  player2: number;
  videoUrl: string;
}

export const matches: Record<number, Match> = {
  1: {
    date: '10.01.2021',
    id: 1,
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
            lichessUrl: 'https://lichess.org/jGNB8ToU/black',
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
            lichessUrl: 'https://lichess.org/OUOfHpX3/black',
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
            lichessUrl: 'https://lichess.org/TbFJukDr/black',
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
            lichessUrl: 'https://lichess.org/s3GHkDzt/black',
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
            lichessUrl: 'https://lichess.org/q31cWdmw/black',
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
            lichessUrl: 'https://lichess.org/xNDHl7yY/black',
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
            lichessUrl: 'https://lichess.org/0dw6g7Ek/black',
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
            lichessUrl: 'https://lichess.org/qHBtz0D8/black',
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
            lichessUrl: 'https://lichess.org/1NZB60x8/black',
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
            lichessUrl: 'https://lichess.org/iL1tMwg2/black',
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
            lichessUrl: 'https://lichess.org/HTVvQI6o/black',
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
            lichessUrl: 'https://lichess.org/hYiixM3R/black',
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
            lichessUrl: 'https://lichess.org/AovfIy1l/black',
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
};
