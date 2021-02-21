import styled from 'styled-components';

export interface HeroContainerProps {
  bigHeroContainer?: boolean;
}

const HeroContainer = styled.div<HeroContainerProps>`
  width: 100%;
  position: relative;
  min-height: ${(props) => (props.bigHeroContainer ? '800px' : '500px')};
  overflow: hidden;
  flex-shrink: 0;
`;

export default HeroContainer;
