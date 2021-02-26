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
          <Link href={`/shop/${pid}`} key={pid}>
            <div className={styles.wrapper}>
              <div className={styles.product_img}>
                <Image
                  priority
                  src={image}
                  height={420}
                  width={327}
                  alt={`${brand} ${model}`}
                />
              </div>
              <div className={styles.product_info}>
                <div className={styles.product_text}>
                  <h1>{model}</h1>
                  <h2>by {brand}</h2>
                  <p>{description}</p>
                </div>
                <div className={styles.product_price_btn}>
                  <p>
                    $<span className={styles.price_number}>{price}</span>
                  </p>
                  <button type='button'>add to cart</button>
                </div>
              </div>
            </div>
          </Link>
        )
      )}
    </>
  );
};

export default Sticks;
