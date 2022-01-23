import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { routing } from '../../routing';
import HeroBox from '../Container/HeroBox';
import Footer from '../Footer';
import Menu from '../Menu';
import Button from '../ui/Button';
import Center from '../ui/Center';
import ContentContainer from '../ui/ContentContainer';
import Flex from '../ui/Flex';
import Hero from '../ui/Hero';
import PageFrame, { PageFrameProps } from './PageFrame';

interface Props extends PageFrameProps {
  landingPage?: boolean;
  showButton?: boolean;
  extendedContainer?: boolean;
}

const Header = styled.h1`
  margin: 0 0 0.5rem 2rem;
  font-size: 1.5em;

  @media screen and (max-width: 620px) {
    margin: 0.5rem 0;
  }
`;

export default function HobbitsPageFrame({
  children,
  contentDescription,
  landingPage,
  title,
  showButton,
  extendedContainer,
}: Props): ReactElement {
  const { t } = useTranslation(['common']);
  return (
    <PageFrame contentDescription={contentDescription} title={(title ? title + ' | ' : '') + 'Hobbits Invitational'}>
      <Menu
        onDark
        menuItems={[
          {
            link: routing.de.tournaments.hobbitInvitational.index,
            text: 'Hobbits Invitational',
          },
          {
            link: routing.de.tournaments.hobbitInvitational.players,
            text: t('players'),
          },
          {
            link: routing.de.tournaments.hobbitInvitational.pairings,
            text: t('pairings'),
          },
        ]}
      />
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
              <Header>Hobbits Invitational 2021</Header>
              {showButton && (
                <Button text={t('gotoPairings')} target={routing.de.tournaments.hobbitInvitational.pairings} />
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
