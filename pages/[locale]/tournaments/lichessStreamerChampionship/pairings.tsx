import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import LichessStreamerChampionshipPageFrame from '../../../../components/PageFrames/LichessStreamerChampionshipPageFrame';
import TournamentPairings from '../../../../components/Pairings/TournamentPairings';
import Center from '../../../../components/ui/Center';
import { brackets } from '../../../../data/lichessStreamerChampionship/Brackets';
import { matches } from '../../../../data/lichessStreamerChampionship/Games';
import { players } from '../../../../data/lichessStreamerChampionship/Players';
import { getStaticPaths, makeStaticProps } from '../../../../lib/getStatic';
import { routing } from '../../../../routing';

const getStaticProps = makeStaticProps(['common', 'lichessStreamerChampionship']);
export { getStaticPaths, getStaticProps };

export default function Pairings(): ReactElement {
  const { t } = useTranslation(['common']);
  return (
    <LichessStreamerChampionshipPageFrame
      title={t('pairings')}
      contentDescription={t('lichessStreamerChampionship:pairings.contentDescription')}
      extendedContainer
    >
      <TournamentPairings
        players={players}
        matches={matches}
        brackets={brackets}
        getLinkUrl={routing.de.tournaments.lichessStreamerChampionship.series.games}
      />
      <br />
      <Center>
        {/*<Button
          text={t('downloadAllGames')}
          target="/pgn/lichessStreamerChampionship/lichessStreamerChampionship.pgn"
          download
        />*/}
      </Center>
    </LichessStreamerChampionshipPageFrame>
  );
}
