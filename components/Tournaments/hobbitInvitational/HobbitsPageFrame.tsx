import PageFrame, { PageFrameProps } from '../../PageFrame';

import ContentContainer from '../../ui/ContentContainer';
import Flex from '../../ui/Flex';
import Footer from '../../Footer';
import Hero from './Hero';
import HeroBox from './HeroBox';
import Image from 'next/image';
import Menu from './Menu';
import { ReactElement } from 'react';

interface Props extends PageFrameProps {
  landingPage?: boolean;
}

export default function HobbitsPageFrame({ children, contentDescription, landingPage, title }: Props): ReactElement {
  return (
    <PageFrame contentDescription={contentDescription} title={(title ? title + ' | ' : '') + 'Hobbits Invitational'}>
      <Menu onDark />
      <Hero bigHeroContainer={landingPage}>
        <HeroBox>
          <Flex>
            <Image
              loading={'eager'}
              src={'/chessHobbitsLogo.png'}
              alt={'Chess Hobbits Logo'}
              layout={'fixed'}
              width="100px"
              height="100px"
            />
            <h1>Hobbits Invitational 2021</h1>
          </Flex>
        </HeroBox>
      </Hero>
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </PageFrame>
  );
}
