import { Twitch, Youtube } from 'lucide-react';
import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: black;
`;

interface StreamLinkProps {
  streamLink: string;
  fallbackName: string;
}

function getTwitchName(streamLink: string): string | undefined {
  const parts = streamLink.split('/');
  return parts.pop();
}

export default function StreamLink({ streamLink, fallbackName }: StreamLinkProps): ReactElement {
  const isTwitch = streamLink.includes('twitch');
  return (
    <StyledLink href={streamLink} target="_blank" rel="noreferrer">
      {!isTwitch && (
        <>
          <Youtube size="18" /> {fallbackName}
        </>
      )}
      {isTwitch && (
        <>
          <Twitch size="18" /> {getTwitchName(streamLink) || fallbackName}
        </>
      )}
    </StyledLink>
  );
}
