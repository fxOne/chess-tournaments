import Button from '../../../../components/ui/Button';
import Center from '../../../../components/ui/Center';
import Hint from '../../../../components/ui/Hint';
import HobbitsPageFrame from '../../../../components/Tournaments/hobbitInvitational/HobbitsPageFrame';
import { ReactElement } from 'react';
import TournamentBracket from '../../../../components/TournamentBracket/TournamentBracket';
import { brackets } from '../../../../data/hobbitsInvitational/Brackets';
import { matches } from '../../../../data/hobbitsInvitational/Games';
import { players } from '../../../../data/hobbitsInvitational/Players';

export default function Pairings(): ReactElement {
  return (
    <HobbitsPageFrame
      title={'Paarungen'}
      contentDescription="Paarungen des Turniers Hobbits Invitationals"
      extendedContainer
    >
      <TournamentBracket brackets={brackets} players={players} matches={matches} />
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
