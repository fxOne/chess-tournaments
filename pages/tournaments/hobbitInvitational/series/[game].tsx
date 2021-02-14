import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';

import HobbitsPageFrame from '../../../../components/Tournaments/hobbitInvitational/HobbitsPageFrame';
import { Match } from '../../../../data/Interfaces';
import { ReactElement } from 'react';
import { matches } from '../../../../data/hobbitsInvitational/Games';

interface GameProps {
  match: Match;
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ game: string }>): Promise<GetStaticPropsResult<GameProps>> {
  const gameId = params?.game;

  if (gameId) {
    const match = matches[+gameId];

    if (match) {
      return {
        props: { match },
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

export default function Game({ match }: GameProps): ReactElement {
  return (
    <HobbitsPageFrame title={'Game 1'}>
      {match.player1} vs {match.player2}
      <br />
      Date
      <br />
      Link to video (embedded?)
      <br />
      Result
      <br />
      Series: (on result click open lichess in new tab)
      <table>
        <tr>
          <td>Player A</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>&frac12;</td>
          <td>2&frac12;</td>
        </tr>
        <tr>
          <td>Player B</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>&frac12;</td>
          <td>1&frac12;</td>
        </tr>
      </table>
    </HobbitsPageFrame>
  );
}
