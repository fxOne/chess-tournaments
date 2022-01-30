import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import LichessStreamerChampionshipPageFrame from '../../../../components/PageFrames/LichessStreamerChampionshipPageFrame';
import TournamentBracket from '../../../../components/TournamentBracket/TournamentBracket';
import Center from '../../../../components/ui/Center';
import Hint from '../../../../components/ui/Hint';
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
      contentDescription={t('lichessStreamerChampionship:bracket.contentDescription')}
      extendedContainer
    >
      <TournamentBracket
        brackets={brackets}
        players={players}
        matches={matches}
        getLinkUrl={routing.de.tournaments.lichessStreamerChampionship.series.games}
        downloadFileName="lichessStreamerChampionship.png"
      />
      <br />
      <Hint>{t('pairingsHint')}</Hint>
      <br />
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
