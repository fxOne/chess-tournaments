import { ReactElement } from 'react';
import styled from 'styled-components';
import Link from '../Link';

interface ButtonProps {
  text: string;
  target: string;
  download?: boolean;
}

const ButtonComponent = styled.div`
  padding: 0.78571429em 1.5em 0.78571429em;
  background-color: #0897ff;
  color: #fff;
  box-shadow: 0 0 0 0 rgb(34 36 38 / 15%) inset;
  display: inline-block;
  margin: 0 0.25em 0 0;
  border-radius: 0.28571429rem;
`;

export default function Button({ text, target, download }: ButtonProps): ReactElement {
  return (
    <Link href={target}>
      <a download={download}>
        <ButtonComponent>{text}</ButtonComponent>
      </a>
    </Link>
  );
}
