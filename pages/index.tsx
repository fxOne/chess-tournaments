import Head from 'next/head';
import Link from 'next/link';
import { ReactElement } from 'react';
export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Overview about all tournaments
      <br />
      Currently redirect to <Link href="/tournaments/hobbitInvitational">hobbitInvitational</Link>
    </div>
  );
}
