import styles from '../../styles/Cart.module.css';
import Image from 'next/image';

const Cart = () => {
  return (
    <>
      <div className={styles.shopping_cart}>
        <div className={styles.title}>Shopping Cart</div>

        <div className={styles.item}>
          <div className={styles.buttons}>
            <span className={styles.delete_btn}></span>
          </div>

          <div className={styles.image}>
            <Image
              priority
              src={'/images/qb_dragon.jpg'}
              height={100}
              width={100}
              alt={'Qanba Dragon'}
            />
          </div>

          <div className={styles.description}>
            <span>Dragon</span>
            <span>By Qanba</span>
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
          </div>

          <div className={styles.image}>
            <Image
              priority
              src={'/images/hori_FE.jpg'}
              height={95}
              width={100}
              alt={'Hori Fighting Edge'}
            />
          </div>

          <div className={styles.description}>
            <span>Fighting Edge</span>
            <span>By Hori</span>
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
          </div>

          <div className={styles.image}>
            <Image
              priority
              src={'/images/vx_pro_fs.jpg'}
              height={95}
              width={100}
              alt={'Victrix PRO FS'}
            />
          </div>

          <div className={styles.description}>
            <span>PRO FS</span>
            <span>By Victrix</span>
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
