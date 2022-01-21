import { ReactElement } from 'react';
import TournamentBox from '../../../components/Container/TournamentBox';
import Footer from '../../../components/Footer';
import Menu from '../../../components/Menu';
import PageFrame from '../../../components/PageFrame';
import Hero from '../../../components/Tournaments/Hero';
import ContentContainer from '../../../components/ui/ContentContainer';
import { routing } from '../../../routing';

export default function De(): ReactElement {
  return (
    <PageFrame>
      <Menu onDark />
      <Hero bigHeroContainer={false} />
      <ContentContainer>
        <TournamentBox
          headerText="Lichess Streamer Championship 2022"
          target={routing.de.tournaments.lichessStreamerChampionship.index}
          buttonText="Zum Turnier"
        />
        <TournamentBox
          headerText="Hobbits Invitational 2021"
          target={routing.de.tournaments.hobbitInvitational.index}
          buttonText="Zum Turnier"
        />
      </ContentContainer>
      <Footer />
    </PageFrame>
  );
}
