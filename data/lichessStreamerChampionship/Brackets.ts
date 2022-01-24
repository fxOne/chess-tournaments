import { Bracket } from '../Interfaces';

export const brackets: Bracket[][] = [
  [
    {
      matchId: 3,
      predecessors: null,
    },
    {
      matchId: 7,
      predecessors: null,
    },
    {
      matchId: 5,
      predecessors: null,
    },
    {
      matchId: 1,
      predecessors: null,
    },
    {
      matchId: 9,
      predecessors: null,
    },
    {
      matchId: 10,
      predecessors: null,
    },
    {
      matchId: 2,
      predecessors: null,
    },
    {
      matchId: 6,
      predecessors: null,
    },
    {
      matchId: 8,
      predecessors: null,
    },
    {
      matchId: 4,
      predecessors: null,
    },
  ],
  [
    {
      matchId: 11,
      predecessors: [null, 3],
    },
    {
      matchId: 15,
      predecessors: [null, 7],
    },
    {
      matchId: 13,
      predecessors: [null, 5],
    },
    {
      matchId: 17,
      predecessors: [1, 9],
    },
    {
      matchId: 18,
      predecessors: [2, 10],
    },
    {
      matchId: 14,
      predecessors: [6, null],
    },
    {
      matchId: 16,
      predecessors: [8, null],
    },
    {
      matchId: 12,
      predecessors: [4, null],
    },
  ],
  [
    {
      matchId: 19,
      predecessors: [11, 15],
    },
    {
      matchId: 21,
      predecessors: [13, 17],
    },
    {
      matchId: 20,
      predecessors: [12, 16],
    },
    {
      matchId: 22,
      predecessors: [14, 18],
    },
  ],
  [
    {
      matchId: 23,
      predecessors: [19, 21],
    },
    {
      matchId: 24,
      predecessors: [20, 22],
    },
  ],
  [
    {
      matchId: 25,
      predecessors: [23, 24],
    },
  ],
];
