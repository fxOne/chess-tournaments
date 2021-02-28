import styled from 'styled-components';

interface ContentContainerProps {
  fullHeight?: boolean;
  noContainerSpacing?: boolean;
  extendedContainer?: boolean;
}

const ContentContainer = styled.div<ContentContainerProps>`
  display: block;
  max-width: ${({ extendedContainer }) => (extendedContainer ? '1400px' : '1280px')};
  margin: ${({ noContainerSpacing }) => (noContainerSpacing ? '0' : '4rem')} auto;
  padding: 0 2rem;
  flex-grow: 1;
  width: 100%;
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  position: relative;
`;

export default ContentContainer;
