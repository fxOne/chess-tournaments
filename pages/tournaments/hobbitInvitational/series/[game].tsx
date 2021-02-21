import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { Match, Players } from '../../../../data/Interfaces';

import Button from '../../../../components/ui/Button';
import HobbitsPageFrame from '../../../../components/Tournaments/hobbitInvitational/HobbitsPageFrame';
import MatchDetails from '../../../../components/Match/MatchDetailts';
import MatchHeader from '../../../../components/Match/MatchHeader';
import MatchResult from '../../../../components/Match/MatchResult';
import { ReactElement } from 'react';
import ResultTable from '../../../../components/ResultTable/ResultTable';
import { matches } from '../../../../data/hobbitsInvitational/Games';
import { players } from '../../../../data/hobbitsInvitational/Players';
import { routing } from '../../../../routing';
import styled from 'styled-components';

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

const MatchesContainer = styled.div`
  display: grid;
  grid-template-columns: max-content;
  grid-row-gap: 2rem;
  padding: 4rem 0 2rem 0;
  margin: 0 auto;
  width: auto;
  justify-content: center;
`;

const MatchTypeContainer = styled.div`
  font-size: 1.4rem;
`;

const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0897ff;
  margin-bottom: 0.5rem;
  margin-top: 2.5rem;
`;

const Hint = styled.div`
  font-size: 0.8rem;
  color: #aaa;
  text-align: center;
`;

export default function Game({ match, players }: GameProps): ReactElement {
  const player1Id = match.player1;
  const player2Id = match.player2;
  const player1 = players[player1Id!] || null;
  const player2 = players[player2Id!] || null;

  return (
    <HobbitsPageFrame title={'Game 1'}>
      <MatchHeader player1={player1} player2={player2} />
      <MatchResult player1={player1} player2={player2} series={match.series} />
      <MatchDetails match={match} />
      {player1 && player2 && match.series.length === 3 && (
        <>
          <MatchesContainer>
            <MatchTypeContainer>
              <Header>5 + 1</Header>
              <ResultTable player1={player1} player2={player2} serie={match.series[0]} />
            </MatchTypeContainer>{' '}
            <MatchTypeContainer>
              <Header>3 + 1</Header>
              <ResultTable player1={player1} player2={player2} serie={match.series[1]} />
            </MatchTypeContainer>{' '}
            <MatchTypeContainer>
              <Header>1 + 1</Header>
              <ResultTable player1={player1} player2={player2} serie={match.series[2]} />
            </MatchTypeContainer>
          </MatchesContainer>
          <Hint>Click the table results to view matches on lichess</Hint>
        </>
      )}
      <Button text="Zurück zu den Paarungen" target={routing.tournaments.hobbitInvitational.pairings} />
    </HobbitsPageFrame>
  );
}
