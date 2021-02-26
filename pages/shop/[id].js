import { getAllStickIds, getStickById } from '../../lib/fetchSticks';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../../styles/Sticks.module.css';

export async function getStaticPaths() {
  const paths = await getAllStickIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const stickData = await getStickById(params.id);
  return {
    props: {
      stickData,
    },
  };
}

const Product = ({ stickData }) => {
  return (
    <>
      <Head>
        <title>TQ Arcade | {`${stickData.brand} ${stickData.model}`}</title>
      </Head>
      <h1 className={styles.title}>
        {stickData.brand} {stickData.model}
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.product_img}>
          <Image
            priority
            src={stickData.image}
            height={420}
            width={327}
            alt={`${stickData.brand} ${stickData.model}`}
          />
        </div>
        <div className={styles.product_info}>
          <div className={styles.product_text}>
            <h1>{stickData.model}</h1>
            <h2>by {stickData.brand}</h2>
            <p>{stickData.description}</p>
          </div>
          <div className={styles.product_price_btn}>
            <p>
              $<span className={styles.price_number}>{stickData.price}</span>
            </p>
            <button type='button'>add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
