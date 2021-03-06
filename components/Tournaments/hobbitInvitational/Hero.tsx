import React, { ReactElement, ReactNode } from 'react';

import HeroContainer from '../../ui/HeroContainer';
import Image from 'next/image';
import styled from 'styled-components';

const HeroImage = styled.div`
  width: calc(100% + 10rem);
  position: absolute;
  top: 0;
  bottom: 0;
  right: -5rem;
  left: -5rem;
  padding: 0 5rem;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 37%);
    content: ' ';
  }
`;

interface HeroProps {
  bigHeroContainer?: boolean;
  children?: ReactNode;
}

export default function Hero({ bigHeroContainer, children }: HeroProps): ReactElement {
  return (
    <HeroContainer bigHeroContainer={bigHeroContainer}>
      <HeroImage>
        <Image
          loading={'eager'}
          src={'/images/hero-chess-figures.png'}
          alt={'Schachfiguren auf einem Schachbrett'}
          layout={'fill'}
          objectFit={'cover'}
          objectPosition={'50% 70%'}
        />
      </HeroImage>
      {children}
    </HeroContainer>
  );
}
