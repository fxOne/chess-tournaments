import Link from 'next/link';
import { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <footer>
      {'>>>>>'}Footer start
      <br />
      <Link href="/about">About this page</Link>
      <br />
      {'>>>>>'}Footer end
    </footer>
  );
}
