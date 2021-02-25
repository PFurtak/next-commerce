import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TQ Arcade</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to TQ Arcade</h1>

        <p className={styles.description}>
          <Link href='/shop/sticks'>
            <a>Click here to shop arcade sticks.</a>
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Home;
