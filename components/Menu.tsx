import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import { routing } from '../routing';
import ContentContainer from './ui/ContentContainer';
import Flex from './ui/Flex';

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
  height: 5rem;
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

const MenuContainer = styled.div`
  display: flex;
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

const MenuContainerMobil = styled.div`
  position: relative;
  display: none;
  @media screen and (max-width: 620px) {
    display: flex;
  }
`;

const HamburgerMenu = styled.img`
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
`;

interface Props {
  onDark?: boolean;
}

export default function Menu({ onDark }: Props): ReactElement {
  const [ref, inView, entry] = useInView();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <BreakPixel ref={ref} />
      <PageMenuWrapper>
        <PageMenuContentWrapper sticky={entry && !inView} dark={onDark}>
          <ContentContainer noContainerSpacing fullHeight>
            <Flex justifyContent={'space-between'} alignItems={'center'} fullHeight>
              <div>
                <img src="/images/logo.svg" alt="chess tournaments logo" height="60px" width="60px" />
              </div>

              <MenuContainer>
                <Link href={routing.de.tournaments.index}>Chess Tournaments</Link>
              </MenuContainer>
              <MenuContainerMobil>
                {!menuOpen && (
                  <HamburgerMenu src="/images/hamburger-menu.svg" onClick={() => setMenuOpen((open) => !open)} />
                )}
                {menuOpen && (
                  <Flex direction="column">
                    <Link href={routing.de.tournaments.index}>
                      <a onClick={() => setMenuOpen(false)}>Chess Tournaments</a>
                    </Link>
                  </Flex>
                )}
              </MenuContainerMobil>
            </Flex>
          </ContentContainer>
        </PageMenuContentWrapper>
      </PageMenuWrapper>
    </>
  );
}
