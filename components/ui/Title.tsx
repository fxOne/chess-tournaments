import { PlayerTitle } from '../../data/Interfaces';
import styled from 'styled-components';

interface TitleProps {
  title: PlayerTitle;
}

const Title = styled.div<TitleProps>`
  color: ${({ title }) => (title === 'GM' ? 'gold' : 'red')};
  fill: ${({ title }) => (title === 'GM' ? 'gold' : 'red')};
`;

export default Title;
