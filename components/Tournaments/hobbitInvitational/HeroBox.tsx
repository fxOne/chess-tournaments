import { ReactElement, ReactNode } from 'react';

import styled from 'styled-components';

const HeroContainerBox = styled.div`
  background-color: #ead9bbc7;

  width: 600px;
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 20%;
  padding: 1em;
`;

interface HeroBoxProps {
  children: ReactNode;
}

export default function HeroBox({ children }: HeroBoxProps): ReactElement {
  return <HeroContainerBox>{children}</HeroContainerBox>;
}
