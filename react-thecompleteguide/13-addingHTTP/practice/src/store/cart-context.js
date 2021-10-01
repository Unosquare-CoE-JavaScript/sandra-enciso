import React from 'react';

const CartContext = React.createContext({ //our initial context
  items: [], //the items of the cart
  totalAmount: 0, //the total amount
  addItem: (item) => {}, //function to add an item
  removeItem: (id) => {}, //function to remove an item
  clearCart: () => {} //function to clear the cart
});

export default CartContext;