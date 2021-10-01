import React from "react";

const CartContext = React.createContext({ //Our initial context
    items: [], //an array of items of the cart
    totalAmount: 0, //the total amount
    addItem: (item) => {}, //function which handles the addition of an item to the cart
    removeItem: (id) => {} //function which handles with the delete of an item of the cart
});

export default CartContext;