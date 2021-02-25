import Link from 'next/link';
import Head from 'next/head';
import getAllSticks from '../../lib/fetchSticks';

export async function getStaticProps() {
  const arcadeSticks = await getAllSticks();
  return {
    props: {
      arcadeSticks,
    },
  };
}

const Sticks = ({ arcadeSticks }) => {
  return (
    <>
      <Head>
        <title>TQ Arcade | Shop Sticks</title>
      </Head>
      <h1>Arcade Sticks</h1>
      <br />
      <ul>
        {arcadeSticks.stock.map(({ brand, model, pid, price }) => (
          <li key={pid}>
            {brand} {model} - ${price}
          </li>
        ))}
      </ul>
      <Link href='/'>
        <a>Back</a>
      </Link>
    </>
  );
};

export default Sticks;
