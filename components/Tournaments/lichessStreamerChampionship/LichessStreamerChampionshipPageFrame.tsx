import Image from 'next/image';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { routing } from '../../../routing';
import HeroBox from '../../Container/HeroBox';
import Footer from '../../Footer';
import PageFrame, { PageFrameProps } from '../../PageFrame';
import Button from '../../ui/Button';
import Center from '../../ui/Center';
import ContentContainer from '../../ui/ContentContainer';
import Flex from '../../ui/Flex';
import Hero from '../Hero';
import Menu from './Menu';

interface Props extends PageFrameProps {
  landingPage?: boolean;
  buttonText?: string;
  extendedContainer?: boolean;
}

const Header = styled.h1`
  margin: 0 0 0.5rem 2rem;
  font-size: 1.5em;

  @media screen and (max-width: 620px) {
    margin: 0.5rem 0;
  }
`;

export default function LichessStreamerChampionshipPageFrame({
  children,
  contentDescription,
  landingPage,
  title,
  buttonText,
  extendedContainer,
}: Props): ReactElement {
  return (
    <PageFrame
      contentDescription={contentDescription}
      title={(title ? title + ' | ' : '') + 'Lichess Streamer Championship'}
    >
      <Menu onDark />
      <Hero bigHeroContainer={landingPage}>
        <HeroBox>
          <Flex alignItems={'center'} mobileCol>
            <Image
              loading={'eager'}
              src={'/images/chessHobbitsLogo.png'}
              alt={'Chess Hobbits Logo'}
              layout={'fixed'}
              width="125px"
              height="120px"
            />
            <Center>
              <Header>Lichess Streamer Championship 2022</Header>
              {buttonText && (
                <Button text={buttonText} target={routing.de.tournaments.lichessStreamerChampionship.pairings} />
              )}
            </Center>
          </Flex>
        </HeroBox>
      </Hero>
      <ContentContainer extendedContainer={extendedContainer}>{children}</ContentContainer>
      <Footer />
    </PageFrame>
  );
}
