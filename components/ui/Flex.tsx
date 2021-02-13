import styled, { CSSProperties } from 'styled-components';

interface FlexProps {
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
}

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  flex-direction: ${(props) => props.direction || 'row'};
`;

export default Flex;
