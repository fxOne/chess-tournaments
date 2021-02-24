import ContentContainer from './ui/ContentContainer';
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
          <Link href={routing.about}>Über uns</Link>
          <div>Sozial Links (twitter/insta ...)</div>
          <Link href={routing.imprint}>Impressum</Link>
        </FooterGrid>
      </ContentContainer>
    </FooterWrapper>
  );
}
