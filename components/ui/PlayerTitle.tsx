import styled from 'styled-components';
import { PlayerTitle as PlayerTitleInterface } from '../../data/Interfaces';

interface TitleProps {
  title?: PlayerTitleInterface;
  rightMargin?: boolean;
}

const titleColors = {
  FM: '#13ff03',
  GM: '#d59020',
  IM: '#d52c20',
};

const PlayerTitle = styled.tspan<TitleProps>`
  color: ${({ title }) => (title && titleColors[title]) ?? 'black'};
  font-weight: bold;
  font-size: 0.8em;
  fill: currentColor;
  margin-right: ${({ rightMargin }) => (rightMargin ? '.5rem' : 'auto')};
`;

export default PlayerTitle;
