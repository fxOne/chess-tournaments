import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { Match, Players } from '../../../../data/Interfaces';

import DisplayPlayer from '../../../../components/DisplayPlayer';
import HobbitsPageFrame from '../../../../components/Tournaments/hobbitInvitational/HobbitsPageFrame';
import { ReactElement } from 'react';
import ResultTable from '../../../../components/ResultTable/ResultTable';
import { matches } from '../../../../data/hobbitsInvitational/Games';
import { players } from '../../../../data/hobbitsInvitational/Players';

interface GameProps {
  match: Match;
  players: Players;
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ game: string }>): Promise<GetStaticPropsResult<GameProps>> {
  const gameId = params?.game;

  if (gameId) {
    const match = matches[+gameId];

    if (match) {
      return {
        props: { match, players },
      };
    }
  }

  return {
    notFound: true,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const gameIds = Object.keys(matches);

  return {
    fallback: false,
    paths: gameIds.map((game) => ({ params: { game } })),
  };
}

export default function Game({ match, players }: GameProps): ReactElement {
  const player1Id = match.player1;
  const player2Id = match.player2;
  const player1 = players[player1Id!] || null;
  const player2 = players[player2Id!] || null;

  return (
    <HobbitsPageFrame title={'Game 1'}>
      <div>
        <DisplayPlayer player={player1} />
        {' gegen '}
        <DisplayPlayer player={player2} />
      </div>
      <div>{match.date}</div>
      {match.videoUrl && (
        <div>
          <a href={match.videoUrl} target="_blank" rel="noreferrer">
            Partiekommentierung
          </a>
        </div>
      )}
      {player1 && player2 && match.series.length === 3 && (
        <div>
          Result(on result click open lichess in new tab)
          <div>
            5 + 1
            <ResultTable player1={player1} player2={player2} serie={match.series[0]} />
          </div>{' '}
          <div>
            3 + 1
            <ResultTable player1={player1} player2={player2} serie={match.series[1]} />
          </div>{' '}
          <div>
            1 + 1
            <ResultTable player1={player1} player2={player2} serie={match.series[2]} />
          </div>
        </div>
      )}
    </HobbitsPageFrame>
  );
}
