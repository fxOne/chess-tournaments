import { Globe } from 'lucide-react';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import { routing } from '../routing';
import LanguageSwitchLink from './LanguageSwitchLink';
import Link from './Link';
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

const LanguageContainer = styled.div`
  position: absolute;
  background-color: white;
  color: black;
  display: none;
  padding: 0.3em;
`;

const LanguageWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover ${LanguageContainer} {
    display: block;
  }
`;

interface MenuItem {
  link: string;
  text: string;
}

interface Props {
  onDark?: boolean;
  menuItems: MenuItem[];
}

export default function Menu({ onDark, menuItems }: Props): ReactElement {
  const [ref, inView, entry] = useInView();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <BreakPixel ref={ref} />
      <PageMenuWrapper>
        <PageMenuContentWrapper sticky={entry && !inView} dark={onDark}>
          <ContentContainer noContainerSpacing fullHeight>
            <Flex justifyContent={'space-between'} alignItems={'center'} fullHeight>
              <Link href={routing.index}>
                <a>
                  <img src="/images/logo.svg" alt="chess tournaments logo" height="60px" width="60px" />
                </a>
              </Link>
              <LanguageWrapper>
                <Globe />
                <LanguageSwitchLink locale={router.query.locale === 'en' ? 'de' : 'en'}>
                  <LanguageContainer>{router.query.locale === 'en' ? 'Deutsch' : 'English'}</LanguageContainer>
                </LanguageSwitchLink>
              </LanguageWrapper>
              <MenuContainer>
                {menuItems.map(({ text, link }) => (
                  <Link href={link} key={link}>
                    {text}
                  </Link>
                ))}
              </MenuContainer>
              <MenuContainerMobil>
                {!menuOpen && (
                  <HamburgerMenu src="/images/hamburger-menu.svg" onClick={() => setMenuOpen((open) => !open)} />
                )}
                {menuOpen && (
                  <Flex direction="column">
                    {menuItems.map(({ text, link }) => (
                      <Link href={link} key={link}>
                        <a onClick={() => setMenuOpen(false)}>{text}</a>
                      </Link>
                    ))}
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
