import { Game } from '../../data/Interfaces';

export function calculateSum(games: Game[], playerId: number): number {
  return games.reduce<number>((sum, { userIdWhite, result }) => {
    const playerResult = playerId === userIdWhite ? result : 1 - result;
    return sum + playerResult;
  }, 0);
}
