import styled from 'styled-components';
import { PlayerTitle as PlayerTitleInterface } from '../../data/Interfaces';

interface TitleProps {
  title?: PlayerTitleInterface;
  rightMargin?: boolean;
}

const titleColors = {
  CM: '#d59020',
  FM: '#d59020',
  GM: '#d59020',
  IM: '#d59020',
  NM: '#d59020',
  WGM: '#d59020',
};

const PlayerTitle = styled.span<TitleProps>`
  color: ${({ title }) => (title && titleColors[title]) ?? 'black'};
  font-weight: bold;
  font-size: 0.9em;
  fill: currentColor;
  margin-right: ${({ rightMargin }) => (rightMargin ? '.5rem' : 'auto')};
`;

export default PlayerTitle;
