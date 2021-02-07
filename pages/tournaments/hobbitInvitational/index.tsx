import Footer from '../../../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import Menu from '../../../components/Tournaments/hobbitInvitational/Menu';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
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
      <Footer />
    </div>
  );
}
