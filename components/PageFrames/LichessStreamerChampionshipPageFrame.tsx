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

export default function LichessStreamerChampionshipPageFrame({
  children,
  contentDescription,
  landingPage,
  title,
  showButton,
  extendedContainer,
}: Props): ReactElement {
  const { t } = useTranslation(['common']);
  return (
    <PageFrame
      contentDescription={contentDescription}
      title={(title ? title + ' | ' : '') + t('lichessStreamerChampionship:tournamentName')}
    >
      <Menu
        onDark
        menuItems={[
          {
            link: routing.de.tournaments.lichessStreamerChampionship.index,
            text: t('overview'),
          },
          {
            link: routing.de.tournaments.lichessStreamerChampionship.players,
            text: t('players'),
          },
          {
            link: routing.de.tournaments.lichessStreamerChampionship.pairings,
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
              <Header>{t('lichessStreamerChampionship:tournamentName')}</Header>
              {showButton && (
                <Button text={t('gotoPairings')} target={routing.de.tournaments.lichessStreamerChampionship.pairings} />
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
