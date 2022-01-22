import { ReactElement } from 'react';
import LichessStreamerChampionshipPageFrame from '../../../../components/PageFrames/LichessStreamerChampionshipPageFrame';
import TournamentBracket from '../../../../components/TournamentBracket/TournamentBracket';
import Center from '../../../../components/ui/Center';
import Hint from '../../../../components/ui/Hint';
import { brackets } from '../../../../data/lichessStreamerChampionship/Brackets';
import { matches } from '../../../../data/lichessStreamerChampionship/Games';
import { players } from '../../../../data/lichessStreamerChampionship/Players';
import { routing } from '../../../../routing';

export default function Pairings(): ReactElement {
  return (
    <LichessStreamerChampionshipPageFrame
      title={'Paarungen'}
      contentDescription="Paarungen des Turniers Lichess Streamer Championship"
      extendedContainer
    >
      <TournamentBracket
        brackets={brackets}
        players={players}
        matches={matches}
        getLinkUrl={routing.de.tournaments.lichessStreamerChampionship.series.games}
      />
      <br />
      <Hint>Klicke auf eine Paarung mit Ergebnis um Details zu sehen</Hint>
      <br />
      <br />
      <Center>
        {/*<Button
          text="Downloade alle Partien als .pgn"
          target="/pgn/lichessStreamerChampionship/lichessStreamerChampionship.pgn"
          download
        />*/}
      </Center>
    </LichessStreamerChampionshipPageFrame>
  );
}
