import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import ContentContainer from '../ui/ContentContainer';

const HeroContainerBox = styled.div`
  background-color: #ead9bbc7;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  position: relative;
  z-index: 1;
`;

interface HeroBoxProps {
  children: ReactNode;
}

const BoxContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 5rem;

  @media screen and (max-width: 620px) {
    justify-content: center;
  }
`;

export default function HeroBox({ children }: HeroBoxProps): ReactElement {
  return (
    <ContentContainer fullHeight noContainerSpacing>
      <BoxContainer>
        <HeroContainerBox>{children}</HeroContainerBox>
      </BoxContainer>
    </ContentContainer>
  );
}
