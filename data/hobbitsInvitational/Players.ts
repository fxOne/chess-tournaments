export interface Player {
  name: string;
  id: number;
  title: 'GM' | 'IM';
}

export const players: Record<number, Player> = {
  1: {
    id: 1,
    name: 'Nico Georgiadis',
    title: 'GM',
  },
  10: {
    id: 10,
    name: 'Jan-Christian Schröder',
    title: 'GM',
  },
  11: {
    id: 11,
    name: 'Léon Mons',
    title: 'GM',
  },
  12: {
    id: 12,
    name: 'Dimitri Kollars',
    title: 'GM',
  },
  13: {
    id: 13,
    name: 'Michael Richter',
    title: 'GM',
  },
  14: {
    id: 14,
    name: 'Martin Krämer',
    title: 'GM',
  },
  2: {
    id: 2,
    name: 'Luis Engel',
    title: 'GM',
  },
  3: {
    id: 3,
    name: 'Dennis Wagner',
    title: 'GM',
  },
  4: {
    id: 4,
    name: 'Ilja Zaragatski',
    title: 'GM',
  },
  5: {
    id: 5,
    name: 'Sebastian Bogner',
    title: 'GM',
  },
  6: {
    id: 6,
    name: 'Rainer Buhmann',
    title: 'GM',
  },
  7: {
    id: 7,
    name: 'Alexander Donchenko',
    title: 'GM',
  },
  8: {
    id: 8,
    name: 'Andreas Heimann',
    title: 'GM',
  },
  9: {
    id: 9,
    name: 'Christopher Noe',
    title: 'IM',
  },
};
