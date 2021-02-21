import { ReactElement, ReactNode } from 'react';

interface FromRow {
  title: ReactNode;
  description: ReactNode;
}

export default function FormRow({ title, description }: FromRow): ReactElement {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}
