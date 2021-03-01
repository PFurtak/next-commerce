import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { getAllSticks } from '../../lib/fetchSticks';
import styles from '../../styles/Sticks.module.css';
import CartContext from '../../context/cart/cartContext';
import image from 'next/image';

export async function getStaticProps() {
  const arcadeSticks = await getAllSticks();

  return {
    props: {
      arcadeSticks,
    },
  };
}

const Sticks = ({ arcadeSticks }) => {
  const cartContext = useContext(CartContext);
  const { addItem } = cartContext;

  const [item, setItem] = useState({
    item_pid: '',
    item_image: '',
    item_model: '',
    item_brand: '',
    item_price: 0,
    item_qty: 0,
  });

  const addToCart = (e) => {
    e.preventDefault();
    console.log('addToCart called');
    console.log(item);
    addItem(item);
  };

  const updateSelection = (e) => {
    e.preventDefault();

    const [pid, model, brand, price, qty, image] = [
      e.target.getAttribute('item_pid'),
      e.target.getAttribute('item_model'),
      e.target.getAttribute('item_brand'),
      e.target.getAttribute('item_price'),
      e.target.getAttribute('item_qty'),
      e.target.getAttribute('item_image'),
    ];

    setItem({
      ...item,
      item_pid: pid,
      item_image: image,
      item_model: model,
      item_brand: brand,
      item_price: price,
      item_qty: qty,
    });
  };

  useEffect(() => {
    if (item.item_pid === '') {
      return;
    } else {
      console.log(item);
      addItem(item);
    }
  }, [item]);

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
              <Link name='item_price' href={`/shop/${pid}`}>
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

                <button
                  type='submit'
                  name='cart button'
                  item_pid={pid}
                  item_image={image}
                  item_model={model}
                  item_brand={brand}
                  item_price={price}
                  item_qty={1}
                  onClick={(e) => updateSelection(e)}>
                  add to cart
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Sticks;
