import Link from 'next/link';
import Head from 'next/head';
import { getAllSticks } from '../../lib/fetchSticks';

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
          <Link href={`/shop/${pid}`} key={pid}>
            <li>
              {brand} {model} - ${price}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Sticks;
