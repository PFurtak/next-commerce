import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { getAllSticks } from '../../lib/fetchSticks';
import styles from '../../styles/Sticks.module.css';

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
      <h1 className={styles.title}>Arcade Sticks</h1>
      <br />
      {arcadeSticks.stock.map(
        ({ brand, model, pid, price, image, description }) => (
          <div className={styles.wrapper} key={pid}>
            <Link href={`/shop/${pid}`}>
              <div className={styles.product_img}>
                <a>
                  <Image
                    priority
                    src={image}
                    height={420}
                    width={327}
                    alt={`${brand} ${model}`}
                  />
                </a>
              </div>
            </Link>
            <div className={styles.product_info}>
              <Link href={`/shop/${pid}`}>
                <div className={styles.product_text}>
                  <a>
                    <h1>{model}</h1>
                  </a>
                  <a>
                    <h2>by {brand}</h2>
                  </a>
                  <a>
                    <p>{description}</p>
                  </a>
                </div>
              </Link>
              <div className={styles.product_price_btn}>
                <p>
                  $<span className={styles.price_number}>{price}</span>
                </p>
                <button type='button'>add to cart</button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Sticks;
