import { uiActions } from './ui-slice'; //Actions to manipulate the ui
import { cartActions } from './cart-slice'; //Actions to manipulate the cart

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => { //fetch the data of the cart
      const response = await fetch(
        'https://react-http-39a5b-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData(); //fetch the data of the cart
      dispatch( //Dispatch the action to replace the cart
        cartActions.replaceCart({
          items: cartData.items || [], //if has items, return the items, otherwise return an empty array
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) { //if an error occurs, then dispatch this action
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};

/* Exports the actions */
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-39a5b-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};