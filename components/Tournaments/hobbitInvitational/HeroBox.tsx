import { ReactElement, ReactNode } from 'react';

import ContentContainer from '../../ui/ContentContainer';
import styled from 'styled-components';

const HeroContainerBox = styled.div`
  background-color: #ead9bbc7;

  width: 520px;
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 5%;
  padding: 1em;
  border: 1px solid #ead9bb;
  border-radius: 0.28571429rem;
`;

export const HeroContainerHeadline = styled.h1`
  font-size: 1.5em;
  margin: 0.5em 0;
`;

interface HeroBoxProps {
  children: ReactNode;
}

export default function HeroBox({ children }: HeroBoxProps): ReactElement {
  return (
    <ContentContainer fullHeight noContainerSpacing>
      <HeroContainerBox>{children}</HeroContainerBox>
    </ContentContainer>
  );
}
