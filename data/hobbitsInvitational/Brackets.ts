import { Bracket } from '../Interfaces';

export const brackets: Bracket[][] = [
  [
    {
      matchId: 1,
      predecessors: null,
    },
    {
      matchId: 3,
      predecessors: null,
    },
    {
      matchId: 2,
      predecessors: null,
    },
    {
      matchId: 4,
      predecessors: null,
    },
    {
      matchId: 5,
      predecessors: null,
    },
    {
      matchId: 6,
      predecessors: null,
    },
  ],
  [
    {
      matchId: 7,
      predecessors: [null, 1],
    },
    {
      matchId: 8,
      predecessors: [3, 2],
    },
    {
      matchId: 9,
      predecessors: [4, 5],
    },
    {
      matchId: 10,
      predecessors: [6, null],
    },
  ],
  [
    {
      matchId: 11,
      predecessors: [7, 8],
    },
    {
      matchId: 12,
      predecessors: [9, 10],
    },
  ],
  [
    {
      matchId: 13,
      predecessors: [11, 12],
    },
  ],
];
