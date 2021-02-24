import ContentContainer from '../components/ui/ContentContainer';
import Footer from '../components/Footer';
import Hero from '../components/Tournaments/hobbitInvitational/Hero';
import Menu from '../components/Tournaments/hobbitInvitational/Menu';
import PageFrame from '../components/PageFrame';
import { ReactElement } from 'react';

export default function About(): ReactElement {
  return (
    <PageFrame>
      <Menu onDark />
      <Hero bigHeroContainer={false} />
      <ContentContainer>
        Idea about Page
        <br />
        Introduction Dominic
        <br />
        Introduction Michael
      </ContentContainer>
      <Footer />
    </PageFrame>
  );
}
