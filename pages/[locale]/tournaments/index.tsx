import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import TournamentBox from '../../../components/Container/TournamentBox';
import Footer from '../../../components/Footer';
import Menu from '../../../components/Menu';
import PageFrame from '../../../components/PageFrames/PageFrame';
import ContentContainer from '../../../components/ui/ContentContainer';
import Hero from '../../../components/ui/Hero';
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic';
import { routing } from '../../../routing';

const getStaticProps = makeStaticProps(['common', 'lichessStreamerChampionship']);
export { getStaticPaths, getStaticProps };

export default function Tournaments(): ReactElement {
  const { t } = useTranslation('common');

  return (
    <PageFrame>
      <Menu
        onDark
        menuItems={[
          {
            link: routing.de.tournaments.index,
            text: 'Chess Tournaments',
          },
        ]}
      />
      <Hero bigHeroContainer={false} />
      <ContentContainer>
        <TournamentBox
          headerText="Lichess Streamer Championship 2022"
          target={routing.de.tournaments.lichessStreamerChampionship.index}
          buttonText={t('gotoTournament')}
        />
        <TournamentBox
          headerText="Hobbits Invitational 2021"
          target={routing.de.tournaments.hobbitInvitational.index}
          buttonText={t('gotoTournament')}
        />
      </ContentContainer>
      <Footer />
    </PageFrame>
  );
}
