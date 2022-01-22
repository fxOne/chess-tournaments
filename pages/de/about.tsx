import { ReactElement } from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';
import PageFrame from '../../components/PageFrames/PageFrame';
import ContentContainer from '../../components/ui/ContentContainer';
import CreatorCard from '../../components/ui/CreatorCard';
import Flex from '../../components/ui/Flex';
import Hero from '../../components/ui/Hero';
import { routing } from '../../routing';

const CreatorContainer = styled.div`
  margin-top: 5rem;
`;

export default function About(): ReactElement {
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
        <h1>Chess Tournaments</h1>
        <p>
          Die Idee zu Chess Tournament ist mir beim Hobbits Invitational Turnier gekommen. Das Hobbits Invitational
          Turnier ist ein Einladungsturnier der Chesshobits99 Adrian Gschnitzer und Marco Riehle an dem 13 deutsche
          Großmeister teilnahmen. Leider hatte dieses Turnier keine eigene Webseite um sich die Ergebnisse anzuschauen.
        </p>
        <p>
          Zusätzlich habe ich einige hochkarätige Online Schachturnier gesehen an denen Großmeister wie Magnus Carlsen
          und Hikaru Nakamura teilgenommen haben. Keiner dieser Seiten hatte einen einfachen Aufbau auf der die
          Ergebnisse sehen konnte oder die Partien nachspielen.
        </p>
        <p>
          Mit dieser Webseite versuche ich diese Problem anzugehen und Turniere in einem einfachen und einheitlichem
          Design zu präsentieren.
        </p>
        <CreatorContainer>
          <Flex justifyContent="space-around">
            <CreatorCard
              twitter={{ name: 'fx__one', url: 'https://twitter.com/fx__one' }}
              name="Dominic Buetow"
              imageUrl="/images/creators/dominic.jpg"
            >
              Idee und Umsetzung
            </CreatorCard>
            <CreatorCard
              twitter={{ name: 'griefcode', url: 'https://twitter.com/griefcode' }}
              name="Michael Ketzer"
              imageUrl="/images/creators/michael.jpeg"
            >
              Design und Umsetzung
            </CreatorCard>
          </Flex>
        </CreatorContainer>
      </ContentContainer>
      <Footer />
    </PageFrame>
  );
}
