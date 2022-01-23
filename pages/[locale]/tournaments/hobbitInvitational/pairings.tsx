import { ReactElement } from 'react';
import HobbitsPageFrame from '../../../../components/PageFrames/HobbitsPageFrame';
import TournamentBracket from '../../../../components/TournamentBracket/TournamentBracket';
import Button from '../../../../components/ui/Button';
import Center from '../../../../components/ui/Center';
import Hint from '../../../../components/ui/Hint';
import { brackets } from '../../../../data/hobbitsInvitational/Brackets';
import { matches } from '../../../../data/hobbitsInvitational/Games';
import { players } from '../../../../data/hobbitsInvitational/Players';
import { getStaticPaths, makeStaticProps } from '../../../../lib/getStatic';
import { routing } from '../../../../routing';

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default function Pairings(): ReactElement {
  return (
    <HobbitsPageFrame
      title={'Paarungen'}
      contentDescription="Paarungen des Turniers Hobbits Invitationals"
      extendedContainer
    >
      <TournamentBracket
        brackets={brackets}
        players={players}
        matches={matches}
        getLinkUrl={routing.de.tournaments.hobbitInvitational.series.games}
      />
      <br />
      <Hint>Klicke auf eine Paarung mit Ergebnis um Details zu sehen</Hint>
      <br />
      <br />
      <Center>
        <Button
          text="Downloade alle Partien als .pgn"
          target="/pgn/hobbitsInvitationals/hobbitsInvitational.pgn"
          download
        />
      </Center>
    </HobbitsPageFrame>
  );
}
