import { PlayerTitle as PlayerTitleInterface } from '../../data/Interfaces';
import styled from 'styled-components';

interface TitleProps {
  title: PlayerTitleInterface;
}

const PlayerTitle = styled.span<TitleProps>`
  color: ${({ title }) => (title === 'GM' ? 'gold' : 'red')};
  fill: ${({ title }) => (title === 'GM' ? 'gold' : 'red')};
`;

export default PlayerTitle;
