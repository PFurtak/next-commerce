import { useContext } from 'react';
import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import CartContext from '../context/cart/cartContext';

const NavBar = () => {
  const cartContext = useContext(CartContext);
  const { cartQty } = cartContext;

  return (
    <nav className={styles.nav_container}>
      <ul className={`${styles.nav_left} ${styles.nav}`}>
        <li className={styles.nav_item}>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href='/shop/sticks'>
            <a>Shop</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.nav_right}>
        <li className={styles.nav_item}>
          <Link href='/shop/cart'>
            <a>Cart ({cartQty})</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
