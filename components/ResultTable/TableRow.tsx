import { Game, Player } from '../../data/Interfaces';

import DisplayPlayer from '../DisplayPlayer';
import { ReactElement } from 'react';

function printNumber(number: number): string {
  /*  let result = Math.floor(number).toString();
  if (number % 1 === 0.5) {
    result += '&frac12;';
  }
  return result;*/
  return number.toString();
}

interface TableRowProps {
  player: Player;
  games: Game[];
}
export default function TableRow({ player, games }: TableRowProps): ReactElement {
  return (
    <tr>
      <td>
        <DisplayPlayer player={player} />
      </td>
      {games.map(({ userIdWhite, result }, i) => {
        const playerResult = player.id === userIdWhite ? result : 1 - result;
        return <td key={i}>{printNumber(playerResult)}</td>;
      })}
      <td>
        {printNumber(
          games.reduce<number>((sum, { userIdWhite, result }) => {
            const playerResult = player.id === userIdWhite ? result : 1 - result;
            return sum + playerResult;
          }, 0),
        )}
      </td>
    </tr>
  );
}
