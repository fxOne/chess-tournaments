import dayjs from 'dayjs';
import { ReactElement, useMemo } from 'react';
import { Bracket, Match, Matches, Players } from '../../data/Interfaces';
import { parseDate } from '../../lib/Dates';
import TournamentBracket from '../TournamentBracket/TournamentBracket';
import { Divider } from '../ui/Divider';
import Pairing from './Pairing';

interface PairingProps {
  brackets: Bracket[][];
  matches: Matches;
  players: Players;
  getLinkUrl(id: number): string;
}

export default function TournamentPairings({ matches, getLinkUrl, players, brackets }: PairingProps): ReactElement {
  const [before, after] = useMemo(() => {
    const matchList = Object.values(matches);
    const filteredList = matchList.filter(
      ({ player1, player2, date }) => player1 && player2 && date && date !== 'unbekannt',
    );
    const before: Match[] = [];
    const after: Match[] = [];
    const now = dayjs().add(-3, 'h');
    for (const match of filteredList) {
      const matchDate = parseDate(match.date);
      if (matchDate.isBefore(now)) {
        before.push(match);
      } else {
        after.push(match);
      }
    }
    before.sort((a, b) => b.date.localeCompare(a.date));
    after.sort((a, b) => a.date.localeCompare(b.date));

    return [before, after];
  }, [matches]);

  return (
    <div>
      <TournamentBracket
        brackets={brackets}
        players={players}
        matches={matches}
        getLinkUrl={getLinkUrl}
        downloadFileName="lichessStreamerChampionship.png"
        bracketHeight="300px"
      />
      {after.map((match) => (
        <Pairing key={match.id} getLinkUrl={getLinkUrl} match={match} players={players} />
      ))}
      {before.length && after.length && <Divider />}
      {before.map((match) => (
        <Pairing key={match.id} getLinkUrl={getLinkUrl} match={match} players={players} />
      ))}
    </div>
  );
}
