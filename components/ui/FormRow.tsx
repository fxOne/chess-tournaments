import { ReactElement, ReactNode } from 'react';

import styled from 'styled-components';

interface FromRow {
  title: ReactNode;
  description: ReactNode;
}

const Label = styled.div`
  @media screen and (max-width: 620px) {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

export default function FormRow({ title, description }: FromRow): ReactElement {
  return (
    <>
      <Label>{title}</Label>
      <div>{description}</div>
    </>
  );
}
