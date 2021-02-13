import Hero from '../../../components/Tournaments/hobbitInvitational/Hero';
import HobbitsPageFrame from '../../../components/Tournaments/hobbitInvitational/HobbitsPageFrame';
import Link from 'next/link';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <HobbitsPageFrame>
      <Hero />
      Main tournament page
      <br />
      Intro
      <br />
      Regulations
      <br />
      <Link href="/tournaments/hobbitInvitational/tree">
        <>{'-->'} go to tree</>
      </Link>
      <br />
      News?
    </HobbitsPageFrame>
  );
}
