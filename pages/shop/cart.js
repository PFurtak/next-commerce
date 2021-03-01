import { useContext } from 'react';
import styles from '../../styles/Cart.module.css';
import Image from 'next/image';
import CartContext from '../../context/cart/cartContext';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { items, isEmpty } = cartContext;

  let cartTotal = 0;
  items.map(({ item_price }) => {
    cartTotal += Number(item_price);
  });

  return (
    <>
      <div className={styles.shopping_cart}>
        <div className={styles.title}>Shopping Cart</div>

        {isEmpty ? (
          <div className={styles.empty_description}>
            <h3>Please add an item to your shopping cart.</h3>
          </div>
        ) : (
          items.map(
            ({ item_model, item_brand, item_price, item_pid, item_image }) => (
              <div className={styles.item} key={item_pid}>
                <div className={styles.buttons}>
                  <span className={styles.delete_btn}></span>
                </div>

                <div className={styles.image}>
                  <Image
                    priority
                    src={item_image}
                    height={100}
                    width={100}
                    alt={'Qanba Dragon'}
                  />
                </div>

                <div className={styles.description}>
                  <span>{item_model}</span>
                  <span>{item_brand}</span>
                </div>

                <div className={styles.quantity}>
                  <button
                    className={styles.plus_btn}
                    type='button'
                    name='button'>
                    <img src='/images/plus.svg' alt='' />
                  </button>
                  <input type='text' name='name' defaultValue='1' />
                  <button
                    className={styles.minus_btn}
                    type='button'
                    name='button'>
                    <img src='/images/minus.svg' alt='' />
                  </button>
                </div>

                <div className={styles.total_price}>${item_price}</div>
              </div>
            )
          )
        )}

        <div className={styles.cart_total}>Cart Total: ${cartTotal}</div>
      </div>
    </>
  );
};

export default Cart;
