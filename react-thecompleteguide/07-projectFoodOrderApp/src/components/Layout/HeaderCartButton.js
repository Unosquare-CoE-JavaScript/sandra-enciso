import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';

/* The header cart button component will be reevaluated by React whenever the context changes. */
const HeaderCartButton = props => {
    const [btnIsHiglighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext); //Accesing to cart context which is managed by the cosest provider (App)
    
    const { items } = cartCtx;

    /* reduce(). The first arg is a function, the second is a starting value */
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    

    const btnClasses = `${classes.button} ${btnIsHiglighted ? classes.bump : ''}`;

    useEffect(() => { //this useEfect add and remove bump class to make an animation
        if(items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />    
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
};

export default HeaderCartButton;