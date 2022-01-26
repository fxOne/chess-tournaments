import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { routing } from '../routing';
import Link from './Link';
import ContentContainer from './ui/ContentContainer';
import InlineLogo from './ui/InlineLogo';

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
  const { t } = useTranslation(['common']);
  return (
    <FooterWrapper>
      <ContentContainer noContainerSpacing>
        <FooterGrid>
          <Link href={routing.de.about}>{t('aboutUs')}</Link>
          <div>
            <a href="https://twitter.com/chess_tourney" target="_blank" rel="noreferrer">
              <InlineLogo src="/images/twitter-logo.svg" alt="twitter logo"></InlineLogo>
            </a>
            <a href="https://www.instagram.com/chess_tourney" target="_blank" rel="noreferrer">
              <InlineLogo src="/images/instagram-logo.svg" alt="instagram logo"></InlineLogo>
            </a>
          </div>
          <Link href={routing.de.imprint}>{t('imprint')}</Link>
        </FooterGrid>
      </ContentContainer>
    </FooterWrapper>
  );
}
