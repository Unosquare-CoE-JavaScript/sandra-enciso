import React from 'react';

import Card from '../UI/Card';
import { useStore } from '../../hooks-store/store';
import './ProductItem.css';

/* React memo around these items should make sure they don't re render if they're props didn't change */
const ProductItem = React.memo(props => {
  /* This hook only is used to dispatch actions, dont needs to listen to the state */
  console.log('RENDERING');
  const dispatch = useStore(false)[1]; //Dispatch function. Dispatches an action

  const toggleFavHandler = () => {
    //dispatch(toggleFav(props.id));
    //toggleFav(props.id);
    dispatch('TOGGLE_FAV', props.id);
    
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
