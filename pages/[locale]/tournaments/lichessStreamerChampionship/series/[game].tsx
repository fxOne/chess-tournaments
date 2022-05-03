import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import styled from 'styled-components';
import MatchDetails from '../../../../../components/Match/MatchDetailts';
import MatchHeader from '../../../../../components/Match/MatchHeader';
import MatchResult from '../../../../../components/Match/MatchResult';
import LichessStreamerChampionshipPageFrame from '../../../../../components/PageFrames/LichessStreamerChampionshipPageFrame';
import { calculateSeries } from '../../../../../components/ResultTable/Calculations';
import ResultTable from '../../../../../components/ResultTable/ResultTable';
import Button from '../../../../../components/ui/Button';
import Center from '../../../../../components/ui/Center';
import Hint from '../../../../../components/ui/Hint';
import { Match, Player, Players } from '../../../../../data/Interfaces';
import { matches } from '../../../../../data/lichessStreamerChampionship/Games';
import { players } from '../../../../../data/lichessStreamerChampionship/Players';
import { getI18nProps, getStaticPathsWithAdditionalParams } from '../../../../../lib/getStatic';
import { routing } from '../../../../../routing';

interface GameProps {
  match: Match;
  players: Players;
}

export async function getStaticProps(
  props: GetStaticPropsContext<{ game: string; locale: string }>,
): Promise<GetStaticPropsResult<GameProps>> {
  const gameId = props.params?.game;
  if (gameId) {
    const match = matches[+gameId];

    if (match) {
      const i18nProps = await getI18nProps(props, ['common', 'lichessStreamerChampionship']);
      return {
        props: { match, players, ...i18nProps },
      };
    }
  }

  return {
    notFound: true,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const gameIds = Object.keys(matches);
  return getStaticPathsWithAdditionalParams(gameIds.map((game) => ({ game })));
}

const MatchesContainer = styled.div`
  display: grid;
  grid-template-columns: max-content;
  grid-row-gap: 2rem;
  padding: 4rem 0 2rem 0;
  margin: 0 auto;
  width: auto;
  justify-content: center;

  @media screen and (max-width: 620px) {
    overflow-x: scroll;
    justify-content: flex-start;
  }
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

function getTitle(player1: Player | null, player2: Player | null): string {
  if (player1 && player2) {
    return `${player1.name} vs ${player2.name}`;
  }
  return '';
}

function getPlayerContentDescription(player: Player, result: number, resultLeft = false): string {
  let description = '';
  if (resultLeft) {
    description += `(${result}) `;
  }
  if (player.title) {
    description += `${player.title} `;
  }
  description += `${player.name}`;
  if (!resultLeft) {
    description += ` (${result})`;
  }
  return description;
}

function getContentDescription(match: Match, player1: Player | null, player2: Player | null): string {
  if (player1 && player2) {
    const resultPlayer1 = calculateSeries(match.series, player1.id);
    const resultPlayer2 = calculateSeries(match.series, player2.id);
    const p1Description = getPlayerContentDescription(player1, resultPlayer1);
    const p2Description = getPlayerContentDescription(player2, resultPlayer2, true);
    return `${p1Description} - ${p2Description}`;
  }
  return '';
}

export default function Game({ match, players }: GameProps): ReactElement {
  const { t } = useTranslation(['common']);
  const player1Id = match.player1;
  const player2Id = match.player2;
  const player1 = players[player1Id!] || null;
  const player2 = players[player2Id!] || null;

  return (
    <LichessStreamerChampionshipPageFrame
      title={getTitle(player1, player2)}
      showButton
      contentDescription={getContentDescription(match, player1, player2)}
    >
      <MatchHeader player1={player1} player2={player2} />
      <MatchResult player1={player1} player2={player2} series={match.series} />
      <MatchDetails match={match} />
      {player1 && player2 && match.series.length && (
        <>
          <MatchesContainer>
            {match.series.length > 0 && (
              <MatchTypeContainer>
                <Header>5 + 1</Header>
                <ResultTable player1={player1} player2={player2} serie={match.series[0]} />
              </MatchTypeContainer>
            )}
            {match.series.length > 1 && (
              <MatchTypeContainer>
                <Header>3 + 1</Header>
                <ResultTable player1={player1} player2={player2} serie={match.series[1]} />
              </MatchTypeContainer>
            )}
            {match.series.length > 2 && (
              <MatchTypeContainer>
                <Header>1 + 1</Header>
                <ResultTable player1={player1} player2={player2} serie={match.series[2]} />
              </MatchTypeContainer>
            )}
          </MatchesContainer>
          <Hint>{t('gameHint')}</Hint>
        </>
      )}
      <br />
      <br />
      <br />
      <Center>
        <Button text={t('backToPairings')} target={routing.de.tournaments.lichessStreamerChampionship.pairings} />
        {match.downloadLink && (
          <>
            <br />
            <br />
            <Button text={t('downloadGames')} target={match.downloadLink} download />
          </>
        )}
      </Center>
    </LichessStreamerChampionshipPageFrame>
  );
}
