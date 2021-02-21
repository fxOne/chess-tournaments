import styled from 'styled-components';

interface ContentContainerProps {
  noContainerSpacing?: boolean;
}

const ContentContainer = styled.div<ContentContainerProps>`
  display: block;
  max-width: 1280px;
  margin: ${({ noContainerSpacing }) => (noContainerSpacing ? '0' : '4rem')} auto;
  padding: 0 2rem;
  flex-grow: 1;
  width: 100%;
`;

export default ContentContainer;
