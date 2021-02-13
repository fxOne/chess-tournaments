import styled, { css } from 'styled-components';

interface Props {
  fixed?: boolean;
  onDark?: boolean;
}

const PageMenu = styled.div<Props>`
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    `}
  height: 2.5rem;
  z-index: 10;
  padding: 1rem 0;
  color: ${(props) => (props.onDark ? '#fff' : '#222')};

  a {
    color: ${(props) => (props.onDark ? '#fff' : '#222')};
    text-decoration: none;
    padding: 0 1rem;
  }
`;

export default PageMenu;
