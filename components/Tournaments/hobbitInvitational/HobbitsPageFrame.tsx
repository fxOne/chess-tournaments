import HeroBox, { HeroContainerHeadline } from './HeroBox';
import PageFrame, { PageFrameProps } from '../../PageFrame';

import Button from '../../ui/Button';
import Center from '../../ui/Center';
import ContentContainer from '../../ui/ContentContainer';
import Flex from '../../ui/Flex';
import Footer from '../../Footer';
import Hero from './Hero';
import Image from 'next/image';
import Menu from './Menu';
import { ReactElement } from 'react';
import { routing } from '../../../routing';

interface Props extends PageFrameProps {
  landingPage?: boolean;
  showButton?: boolean;
}

export default function HobbitsPageFrame({
  children,
  contentDescription,
  landingPage,
  title,
  showButton: showLink,
}: Props): ReactElement {
  return (
    <PageFrame contentDescription={contentDescription} title={(title ? title + ' | ' : '') + 'Hobbits Invitational'}>
      <Menu onDark />
      <Hero bigHeroContainer={landingPage}>
        <HeroBox>
          <Flex alignItems="center" justifyContent="space-between">
            <Image
              loading={'eager'}
              src={'/chessHobbitsLogo.png'}
              alt={'Chess Hobbits Logo'}
              layout={'fixed'}
              width="125px"
              height="120px"
            />
            <Center>
              <HeroContainerHeadline>Hobbits Invitational 2021</HeroContainerHeadline>
              {showLink && (
                <Button text="Zu den Paarungen" target={routing.de.tournaments.hobbitInvitational.pairings} />
              )}
            </Center>
          </Flex>
        </HeroBox>
      </Hero>
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </PageFrame>
  );
}
