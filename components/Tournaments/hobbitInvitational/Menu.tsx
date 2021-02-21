import styled, { css } from 'styled-components';

import ContentContainer from '../../ui/ContentContainer';
import Flex from '../../ui/Flex';
import Link from 'next/link';
import { ReactElement } from 'react';
import { routing } from '../../../routing';
import { useInView } from 'react-intersection-observer';

const BreakPixel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
`;

const PageMenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const PageMenuContentWrapper = styled.div<{
  sticky?: boolean;
  dark?: boolean;
}>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 2.5rem;
  z-index: 10;
  padding: 1rem 0;
  color: ${({ dark }) => (dark ? '#fff' : '#222')};
  background-color: rgba(255, 255, 255, 0);
  box-shadow: none;
  transition: background-color 240ms ease-in-out, box-shadow 240ms ease-in-out;

  a {
    color: ${({ dark }) => (dark ? '#fff' : '#222')};
    text-decoration: none;
    padding: 0 1rem;
  }

  ${({ sticky }) =>
    sticky &&
    css`
      color: #222;
      background-color: #fff;
      box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2);

      a {
        color: #222;
      }
    `}
`;

interface Props {
  onDark?: boolean;
}

export default function Menu({ onDark }: Props): ReactElement {
  const [ref, inView, entry] = useInView();

  return (
    <>
      <BreakPixel ref={ref} />
      <PageMenuWrapper>
        <PageMenuContentWrapper sticky={entry && !inView} dark={onDark}>
          <ContentContainer noContainerSpacing fullHeight>
            <Flex justifyContent={'space-between'} alignItems={'center'} fullHeight>
              <div>Chess Tournaments</div>

              <Flex>
                <Link href={routing.tournaments.hobbitInvitational.index}>Tournament Home (about?)</Link>
                <br />
                <Link href={routing.tournaments.hobbitInvitational.players}>Spieler</Link>
                <br />
                <Link href={routing.tournaments.hobbitInvitational.pairings}>Paarungen</Link>
              </Flex>
            </Flex>
          </ContentContainer>
        </PageMenuContentWrapper>
      </PageMenuWrapper>
    </>
  );
}
