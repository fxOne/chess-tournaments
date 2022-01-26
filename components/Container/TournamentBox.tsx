import Image from 'next/image';
import { ReactElement } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import Center from '../ui/Center';
import Flex from '../ui/Flex';

const Header = styled.h1`
  margin: 0 0 0.5rem 2rem;
  font-size: 1.5em;

  @media screen and (max-width: 620px) {
    margin: 0.5rem 0;
  }
`;

const HeroContainerBox = styled.div`
  background-color: #ead9bbc7;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  width: 100%;
`;

const BoxContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 1rem;

  @media screen and (max-width: 620px) {
    justify-content: center;
  }
`;

interface HeroBoxProps {
  buttonText: string;
  headerText: string;
  target: string;
}

export default function TournamentBox({ buttonText, headerText, target }: HeroBoxProps): ReactElement {
  return (
    <BoxContainer>
      <HeroContainerBox>
        <Flex alignItems={'center'} justifyContent={'center'} mobileCol>
          <Image
            loading={'eager'}
            src={'/images/chessHobbitsLogo.png'}
            alt={'Chess Hobbits Logo'}
            layout={'fixed'}
            width="125px"
            height="120px"
          />
          <Center>
            <Header>{headerText}</Header>
            {buttonText && <Button text={buttonText} target={target} />}
          </Center>
        </Flex>
      </HeroContainerBox>
    </BoxContainer>
  );
}
