import PageFrame, { PageFrameProps } from '../../PageFrame';

import ContentContainer from '../../ui/ContentContainer';
import Flex from '../../ui/Flex';
import Footer from '../../Footer';
import Hero from './Hero';
import HeroBox from './HeroBox';
import Image from 'next/image';
import Menu from './Menu';
import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props extends PageFrameProps {
  landingPage?: boolean;
}

const Header = styled.h1`
  margin: 0 0 0 2rem;
`;
export default function HobbitsPageFrame({ children, contentDescription, landingPage, title }: Props): ReactElement {
  return (
    <PageFrame contentDescription={contentDescription} title={(title ? title + ' | ' : '') + 'Hobbits Invitational'}>
      <Menu onDark />
      <Hero bigHeroContainer={landingPage}>
        <HeroBox>
          <Flex alignItems={'center'}>
            <Image
              loading={'eager'}
              src={'/chessHobbitsLogo.png'}
              alt={'Chess Hobbits Logo'}
              layout={'fixed'}
              width="100px"
              height="100px"
            />
            <Header>Hobbits Invitational 2021</Header>
          </Flex>
        </HeroBox>
      </Hero>
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </PageFrame>
  );
}
