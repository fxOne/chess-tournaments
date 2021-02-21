import FormRow from '../../../components/ui/FormRow';
import HobbitsPageFrame from '../../../components/Tournaments/hobbitInvitational/HobbitsPageFrame';
import Link from 'next/link';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <HobbitsPageFrame landingPage>
      <h1>Hobbits Invitational 2020</h1>
      <p>
        Das Hobbits Invitational 2020 ist ein Einladungsturnier für deutsche GMs und IMs von den{' '}
        <a href={'https://www.twitch.tv/chesshobbits99'} target="_blank" rel="noreferrer">
          Chesshobits99
        </a>
        .
      </p>
      <p>Chesshobts99 ist ein Twitch Kanal von den Schachspielern IM Adrian Gschnitzer und FM Marco Riehl.</p>
      <h2>Ausschreibung</h2>
      <FormRow
        title={'Spielort'}
        description={
          <>
            Die Partien werden auf dem Twitch Kanal{' '}
            <a href={'https://www.twitch.tv/chesshobbits99'} target="_blank" rel="noreferrer">
              Chesshobits99
            </a>{' '}
            gestreamt und auf{' '}
            <a href={'https://lichess.org/'} target="_blank" rel="noreferrer">
              lichess.org
            </a>{' '}
            ausgetragen.
          </>
        }
      />
      <FormRow
        title={'Kommentatoren'}
        description={
          <>
            IM Adrian Gschnitzer und FM Marco Riehl auf{' '}
            <a href={'https://www.twitch.tv/chesshobbits99'} target="_blank" rel="noreferrer">
              Chesshobits99
            </a>
          </>
        }
      />
      <FormRow
        title={'Datum'}
        description={'Beginnend ab dem 10.01.2021. Die Partien finden je nachdem wie die Spieler Zeit haben statt.'}
      />
      <FormRow
        title={'Austragungssystem'}
        description={
          <>
            Eliminierung Turnier mit jeweils 3 Runden:
            <ul>
              <li>70 Minuten 5 Minuten + 1 Sekunde pro zug</li>
              <li>60 Minuten 3 Minuten + 1 Sekunde pro zug</li>
              <li>30 Minuten 1 Minuten + 1 Sekunde pro zug</li>
            </ul>
            Die letzte Partie nach Ablauf der Zeit zählt mit. Sieger mit den meisten Punkten kommt weiter.
          </>
        }
      />

      <Link href="/tournaments/hobbitInvitational/tree">
        <>{'-->'} go to tree</>
      </Link>
    </HobbitsPageFrame>
  );
}
