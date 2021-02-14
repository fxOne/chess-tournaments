import ContentContainer from '../../ui/ContentContainer';
import Flex from '../../ui/Flex';
import Link from 'next/link';
import PageMenu from '../../ui/PageMenu';
import { ReactElement } from 'react';

interface Props {
  fixed?: boolean;
  onDark?: boolean;
}

export default function Menu({ fixed, onDark }: Props): ReactElement {
  return (
    <PageMenu fixed={fixed} dark={onDark}>
      <ContentContainer>
        <nav>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <div>Chess Tournaments</div>

            <Flex>
              <Link href="/tournaments/hobbitInvitational">Tournament Home (about?)</Link>
              <br />
              <Link href="/tournaments/hobbitInvitational/players">Spieler</Link>
              <br />
              <Link href="/tournaments/hobbitInvitational/pairings">Paarungen</Link>
            </Flex>
          </Flex>
        </nav>
      </ContentContainer>
    </PageMenu>
  );
}
