/*
This is our main component. This component shows a header which contains the qty of the items to order.
Shows the cart with the items and the total
*/
import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  //uses the state to know if the cart is shown or not
  const [cartIsShown, setCartIsShown] = useState(false); //The initial state is false, so the cart isnt shown

  /* The following functions handles with the show or hide of the cart */
  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

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
