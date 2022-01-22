import { ReactElement } from 'react';
import TournamentBox from '../../../components/Container/TournamentBox';
import Footer from '../../../components/Footer';
import Menu from '../../../components/Menu';
import PageFrame from '../../../components/PageFrames/PageFrame';
import ContentContainer from '../../../components/ui/ContentContainer';
import Hero from '../../../components/ui/Hero';
import { routing } from '../../../routing';

export default function De(): ReactElement {
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
