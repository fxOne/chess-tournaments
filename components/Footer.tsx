import Link from 'next/link';
import { ReactElement } from 'react';
import { routing } from '../routing';

export default function Footer(): ReactElement {
  return (
    <footer>
      {'>>>>>'}Footer start
      <br />
      <Link href={routing.about}>About this page</Link>
      <br />
      Sozial Links (twitter/insta ...)
      <br />
      Email Newsletter?
      <br />
      {'>>>>>'}Footer end
    </footer>
  );
}
