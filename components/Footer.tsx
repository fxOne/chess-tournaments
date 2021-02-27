import ContentContainer from './ui/ContentContainer';
import InlineLogo from './ui/InlineLogo';
import Link from 'next/link';
import { ReactElement } from 'react';
import { routing } from '../routing';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #323232;
  color: #fff;
  flex-shrink: 0;
  padding: 1rem 2rem;
  font-size: 1rem;

  a {
    color: #fff;
  }
`;

const FooterGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default function Footer(): ReactElement {
  return (
    <FooterWrapper>
      <ContentContainer noContainerSpacing>
        <FooterGrid>
          <Link href={routing.de.about}>Über uns</Link>
          <div>
            <a href="https://twitter.com/chess_tourney" target="_blank" rel="noreferrer">
              <InlineLogo src="/twitter-logo.svg" alt="twitter logo"></InlineLogo>
            </a>
            <a href="https://www.instagram.com/chess_tourney" target="_blank" rel="noreferrer">
              <InlineLogo src="/instagram-logo.svg" alt="instagram logo"></InlineLogo>
            </a>
          </div>
          <Link href={routing.de.imprint}>Impressum</Link>
        </FooterGrid>
      </ContentContainer>
    </FooterWrapper>
  );
}
