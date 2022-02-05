import dayjs from 'dayjs';
import { ReactElement, useMemo } from 'react';
import styled from 'styled-components';
import { Match, Matches, Players } from '../../data/Interfaces';
import { parseDate } from '../../lib/Dates';
import { Divider } from '../ui/Divider';
import Pairing from './Pairing';

interface PairingProps {
  matches: Matches;
  players: Players;
  getLinkUrl(id: number): string;
}

const DateLine = styled.div`
  text-align: center;
  margin: 1em 200px 0 0;
  @media screen and (max-width: 620px) {
    margin-right: 0;
  }
`;

export default function TournamentPairings({ matches, getLinkUrl, players }: PairingProps): ReactElement {
  const [before, after, undatedList] = useMemo(() => {
    const matchList = Object.values(matches);
    const datedList = matchList.filter(
      ({ player1, player2, date }) => player1 && player2 && date && date !== 'unbekannt',
    );
    const undatedList = matchList.filter(
      ({ player1, player2, date }) => (player1 || player2) && date && date === 'unbekannt',
    );
    const before: Match[] = [];
    const after: Match[] = [];
    const now = dayjs().add(-3, 'h');
    for (const match of datedList) {
      const matchDate = parseDate(match.date);
      if (matchDate.isBefore(now)) {
        before.push(match);
      } else {
        after.push(match);
      }
    }
    before.sort((a, b) => b.date.localeCompare(a.date));
    after.sort((a, b) => a.date.localeCompare(b.date));

    return [before, after, undatedList];
  }, [matches]);

  return (
    <div>
      {after.map((match) => (
        <Pairing key={match.id} getLinkUrl={getLinkUrl} match={match} players={players} />
      ))}
      {undatedList.length > 0 && (
        <>
          {Boolean(after.length) && <Divider />}
          <DateLine>TBD</DateLine>
          {undatedList.map((match) => (
            <Pairing key={match.id} getLinkUrl={getLinkUrl} match={match} players={players} noDate />
          ))}
        </>
      )}
      {Boolean(before.length || undatedList.length) && <Divider />}
      {before.map((match) => (
        <Pairing key={match.id} getLinkUrl={getLinkUrl} match={match} players={players} />
      ))}
    </div>
  );
}
