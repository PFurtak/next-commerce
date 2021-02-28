import styles from '../../styles/Cart.module.css';

const Cart = () => {
  return (
    <>
      <div className={styles.shopping_cart}>
        <div className={styles.title}>Shopping Cart</div>

        <div className={styles.item}>
          <div className={styles.buttons}>
            <span className={styles.delete_btn}></span>
            <span className={styles.like_btn}></span>
          </div>

          <div className={styles.image}>
            <img src='' alt='' />
          </div>

          <div className={styles.description}>
            <span>Common Projects</span>
            <span>Bball High</span>
            <span>White</span>
          </div>

          <div className={styles.quantity}>
            <button className={styles.plus_btn} type='button' name='button'>
              <img src='/images/plus.svg' alt='' />
            </button>
            <input type='text' name='name' value='1' />
            <button className={styles.minus_btn} type='button' name='button'>
              <img src='/images/minus.svg' alt='' />
            </button>
          </div>

          <div className={styles.total_price}>$549</div>
        </div>

        <div className={styles.item}>
          <div className={styles.buttons}>
            <span className={styles.delete_btn}></span>
            <span className={styles.like_btn}></span>
          </div>

          <div className={styles.image}>
            <img src='item-2.png' alt='' />
          </div>

          <div className={styles.description}>
            <span>Maison Margiela</span>
            <span>Future Sneakers</span>
            <span>White</span>
          </div>

          <div className={styles.quantity}>
            <button className={styles.plus_btn} type='button' name='button'>
              <img src='/images/plus.svg' alt='' />
            </button>
            <input type='text' name='name' value='1' />
            <button className={styles.minus_btn} type='button' name='button'>
              <img src='/images/minus.svg' alt='' />
            </button>
          </div>

          <div className={styles.total_price}>$870</div>
        </div>

        <div className={styles.item}>
          <div className={styles.buttons}>
            <span className={styles.delete_btn}></span>
            <span className={styles.like_btn}></span>
          </div>

          <div className={styles.image}>
            <img src='item-3.png' alt='' />
          </div>

          <div className={styles.description}>
            <span>Our Legacy</span>
            <span>Brushed Scarf</span>
            <span>Brown</span>
          </div>

          <div className={styles.quantity}>
            <button className={styles.plus_btn} type='button' name='button'>
              <img src='/images/plus.svg' alt='' />
            </button>
            <input type='text' name='name' value='1' />
            <button className={styles.minus_btn} type='button' name='button'>
              <img src='/images/minus.svg' alt='' />
            </button>
          </div>

          <div className={styles.total_price}>$349</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
