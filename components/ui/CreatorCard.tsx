import { ReactElement, ReactNode } from 'react';

import Image from 'next/image';
import styled from 'styled-components';

interface Twitter {
  url: string;
  name: string;
}

interface CreatorCardProps {
  children: ReactNode;
  imageUrl: string;
  twitter?: Twitter;
  name: string;
}

const Card = styled.div`
  width: 300px;
  margin: 0.5rem;
  background-color: #eee;
  min-height: 347px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
`;

export default function CreatorCard({ imageUrl, name, children, twitter }: CreatorCardProps): ReactElement {
  return (
    <Card>
      {imageUrl && (
        <Image
          loading={'eager'}
          src={imageUrl}
          alt={name}
          layout={'fixed'}
          objectFit={'cover'}
          objectPosition={'center top'}
          width="300px"
          height="300px"
        />
      )}
      <div>{name}</div>
      <div>{children}</div>
      {twitter && (
        <div>
          <a href={twitter.url} target="_blank" rel="noreferrer">
            @{twitter.name}
          </a>
        </div>
      )}
    </Card>
  );
}
