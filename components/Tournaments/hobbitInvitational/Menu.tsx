import Link from 'next/link';
import { ReactElement } from 'react';

export default function Menu(): ReactElement {
  return (
    <nav>
      {'>>>>>'}Menu start
      <br />
      <Link href="/tournaments/hobbitInvitational">Tournament Home (about?)</Link>
      <br />
      <Link href="/tournaments/hobbitInvitational/players">Players</Link>
      <br />
      <Link href="/tournaments/hobbitInvitational/tree">Tree</Link>
      <br />
      {'>>>>>'}Menu end
    </nav>
  );
}
