/* This is our main component and uses a cart provider to shown the cart
the data is fetched from a data base of firebase */
import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false); //this state is for shown the cart

  const showCartHandler = () => { //shown the cart
    setCartIsShown(true);
  };

  const hideCartHandler = () => { //hides the cart
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
