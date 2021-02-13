import ContentContainer from '../../ui/ContentContainer';
import Flex from '../../ui/Flex';
import Link from 'next/link';
import PageMenu from '../../ui/PageMenu';
import { ReactElement } from 'react';

export default function Menu(): ReactElement {
  return (
    <PageMenu>
      <ContentContainer>
        <nav>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <div>Chess Tournaments</div>

            <Flex>
              <Link href="/tournaments/hobbitInvitational">Tournament Home (about?)</Link>
              <br />
              <Link href="/tournaments/hobbitInvitational/players">Players</Link>
              <br />
              <Link href="/tournaments/hobbitInvitational/tree">Tree</Link>
            </Flex>
          </Flex>
        </nav>
      </ContentContainer>
    </PageMenu>
  );
}
