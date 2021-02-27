import styles from '../styles/NavBar.module.css';
import Link from 'next/link';

const NavBar = () => {
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
        <li className={styles.nav_item}>Cart (0)</li>
      </ul>
    </nav>
  );
};

export default NavBar;
