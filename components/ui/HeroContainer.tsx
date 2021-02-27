import styled from 'styled-components';

export interface HeroContainerProps {
  bigHeroContainer?: boolean;
}

const HeroContainer = styled.div<HeroContainerProps>`
  width: 100%;
  position: relative;
  min-height: ${(props) => (props.bigHeroContainer ? '50vh' : '30vh')};
  overflow: hidden;
  flex-shrink: 0;
`;

export default HeroContainer;
