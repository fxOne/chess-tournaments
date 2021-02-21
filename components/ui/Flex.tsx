import styled, { CSSProperties } from 'styled-components';

interface FlexProps {
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  fullHeight?: boolean;
  wrap?: CSSProperties['flexWrap'];
}

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  flex-direction: ${(props) => props.direction || 'row'};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  flex-wrap: ${({ wrap }) => wrap || 'inherit'};
`;

export default Flex;
