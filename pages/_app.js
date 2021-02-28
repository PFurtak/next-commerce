import '../styles/globals.css';
import NavBar from '../components/NavBar';
import CartState from '../context/cart/CartState';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartState>
        <NavBar />
        <Component {...pageProps} />
      </CartState>
    </>
  );
}

export default MyApp;
