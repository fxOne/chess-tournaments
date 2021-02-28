import DisplayPlayer from '../DisplayPlayer';
import { Player } from '../../data/Interfaces';
import { ReactElement } from 'react';
import styled from 'styled-components';

export const Header = styled.h1`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
  font-weight: normal;

  @media screen and (max-width: 620px) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeaderVs = styled.div`
  margin: 0 1.5rem;
  color: #aaa;
  font-size: 1.5rem;
  font-weight: normal;

  @media screen and (max-width: 620px) {
    margin: 1.5rem;
  }
`;

interface Props {
  player1: Player | null;
  player2: Player | null;
}

export default function MatchHeader({ player1, player2 }: Props): ReactElement {
  return (
    <Header>
      <DisplayPlayer player={player1} />
      <HeaderVs>vs</HeaderVs>
      <DisplayPlayer player={player2} />
    </Header>
  );
}
