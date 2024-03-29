import { ReactElement } from 'react';
import styled from 'styled-components';
import HobbitsPageFrame from '../../../../components/PageFrames/HobbitsPageFrame';
import Button from '../../../../components/ui/Button';
import Center from '../../../../components/ui/Center';
import FormRow from '../../../../components/ui/FormRow';
import { getStaticPaths, makeStaticProps } from '../../../../lib/getStatic';
import { routing } from '../../../../routing';

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 10rem;
  font-size: 1.1rem;

  @media screen and (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Divider = styled.div`
  height: 1px;
  grid-column: 1 / -1;
  background-color: #ddd;
`;

const Header = styled.h2`
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

export default function Home(): ReactElement {
  return (
    <HobbitsPageFrame
      landingPage
      showButton
      contentDescription="Das Hobbits Invitational 2021 ist ein Einladungsturnier für deutsche GMs und IMs von den ChessHobbits99."
    >
      <h1>Hobbits Invitational 2021</h1>
      <p>
        Das Hobbits Invitational 2021 ist ein Einladungsturnier für deutsche GMs und IMs von den{' '}
        <a href={'https://www.twitch.tv/chesshobbits99'} target="_blank" rel="noreferrer">
          ChessHobbits99
        </a>
        .
      </p>
      <p>Chesshobts99 ist ein Twitch Kanal von den Schachspielern IM Adrian Gschnitzer und FM Marco Riehle.</p>
      <Header>Ausschreibung</Header>
      <FormGrid>
        <FormRow
          title={'Spielort'}
          description={
            <>
              Die Partien werden auf dem Twitch Kanal{' '}
              <a href={'https://www.twitch.tv/chesshobbits99'} target="_blank" rel="noreferrer">
                ChessHobbits99
              </a>{' '}
              gestreamt und auf{' '}
              <a href={'https://lichess.org/'} target="_blank" rel="noreferrer">
                lichess.org
              </a>{' '}
              ausgetragen.
            </>
          }
        />

        <Divider />

        <FormRow
          title={'Kommentatoren'}
          description={
            <>
              IM Adrian Gschnitzer und FM Marco Riehle auf{' '}
              <a href={'https://www.twitch.tv/chesshobbits99'} target="_blank" rel="noreferrer">
                ChessHobbits99
              </a>
            </>
          }
        />

        <Divider />

        <FormRow title={'Datum'} description={'10.01.2021 - 21.03.2021'} />

        <Divider />

        <FormRow
          title={'Austragungssystem'}
          description={
            <>
              Eliminierung Turnier mit jeweils 3 Runden:
              <ul>
                <li>70 Minuten 5 Minuten + 1 Sekunde pro Zug</li>
                <li>60 Minuten 3 Minuten + 1 Sekunde pro Zug</li>
                <li>30 Minuten 1 Minuten + 1 Sekunde pro Zug</li>
              </ul>
              Die laufende Partie nach Ablauf der Zeit zählt mit. Sieger mit den meisten Punkten kommt weiter.
            </>
          }
        />
      </FormGrid>

      <br />
      <br />
      <br />

      <Center>
        <Button text="Zu den Paarungen" target={routing.de.tournaments.hobbitInvitational.pairings} />
      </Center>
    </HobbitsPageFrame>
  );
}
