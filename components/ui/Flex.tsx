import styled, { CSSProperties, css } from 'styled-components';

interface FlexProps {
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  fullHeight?: boolean;
  wrap?: CSSProperties['flexWrap'];
  mobileCol?: boolean;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  flex-direction: ${(props) => props.direction || 'row'};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  flex-wrap: ${({ wrap }) => wrap || 'inherit'};

  ${({ mobileCol }) =>
    mobileCol &&
    css`
      @media screen and (max-width: 620px) {
        & {
          flex-direction: column;
          align-items: center;
        }
      }
    `}
`;

export default Flex;
