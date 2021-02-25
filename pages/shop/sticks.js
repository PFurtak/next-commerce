import Link from 'next/link';
import Head from 'next/head';

const Sticks = () => {
  return (
    <>
      <Head>
        <title>TQ Arcade | Shop Sticks</title>
      </Head>

      <h1>Arcade Sticks</h1>
      <Link href='/'>
        <a>Back</a>
      </Link>
    </>
  );
};

export default Sticks;
