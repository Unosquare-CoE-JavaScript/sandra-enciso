import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

/* in that reducer functtion, you can run different pieces of code depending on which action type was dispatched */
const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex( //finds an index of an item in an array
            item => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem; //overided with updatedItem
        } else { //if the item doesn't exist in the cart item 
            updatedItems = state.items.concat(action.item); //updates the state in an immutable way
        }

        
        return { //returns a new state
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if ( action.type === 'REMOVE' ) {
        const existingCartItemIndex = state.items.findIndex( //finds an index of an item in an array
            item => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1){ //Is the last and only amount of the item and remove the entire item of the array
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else { //keeps the item in the cart but decrease the amount
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }; 
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = props => {
    //cartState is the last snapshot, dispatchCartAction is the function which allows you to dispatch an action to the reducer
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    /* Whenever this functin is called, we get the item that should be added to the cart*/
    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item}); //pointing to my argument item, here is forwarding the item which I expect to get here on this function to my reducer
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;