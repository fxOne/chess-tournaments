import PageFrame, { PageFrameProps } from '../../PageFrame';

import Button from '../../ui/Button';
import Center from '../../ui/Center';
import ContentContainer from '../../ui/ContentContainer';
import Flex from '../../ui/Flex';
import Footer from '../../Footer';
import Hero from './Hero';
import HeroBox from './HeroBox';
import Image from 'next/image';
import Menu from './Menu';
import { ReactElement } from 'react';
import { routing } from '../../../routing';
import styled from 'styled-components';

interface Props extends PageFrameProps {
  landingPage?: boolean;
  buttonText?: string;
}

const Header = styled.h1`
  margin: 0 0 0.5rem 2rem;
  font-size: 1.5em;
`;

export default function HobbitsPageFrame({
  children,
  contentDescription,
  landingPage,
  title,
  buttonText,
}: Props): ReactElement {
  return (
    <PageFrame contentDescription={contentDescription} title={(title ? title + ' | ' : '') + 'Hobbits Invitational'}>
      <Menu onDark />
      <Hero bigHeroContainer={landingPage}>
        <HeroBox>
          <Flex alignItems={'center'} mobileCol>
            <Image
              loading={'eager'}
              src={'/chessHobbitsLogo.png'}
              alt={'Chess Hobbits Logo'}
              layout={'fixed'}
              width="125px"
              height="120px"
            />
            <Center>
              <Header>Hobbits Invitational 2021</Header>
              {buttonText && <Button text={buttonText} target={routing.de.tournaments.hobbitInvitational.pairings} />}
            </Center>
          </Flex>
        </HeroBox>
      </Hero>
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </PageFrame>
  );
}
