import { ReactElement, ReactNode } from 'react';

import styled from 'styled-components';

const HeroContainerBox = styled.div`
  background-color: #ead9bbc7;
  position: absolute;
  z-index: 1;
  top: calc(50% + 2.5rem);
  transform: translateY(-50%);
  left: 20vw;
  padding: 0.5rem 1rem;
  border-radius: 8px;
`;

interface HeroBoxProps {
  children: ReactNode;
}

export default function HeroBox({ children }: HeroBoxProps): ReactElement {
  return <HeroContainerBox>{children}</HeroContainerBox>;
}
