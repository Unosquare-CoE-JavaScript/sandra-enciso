import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() =>{
      if(enteredFilter === inputRef.current.value){ //if true, that means nothig has changed, so the user stops typing
         const query = 
          enteredFilter.length === 0 
            ? '' 
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        fetch('https://react-hooks-update-bed73-default-rtdb.firebaseio.com/ingredients.json' + query)
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData);
          const loadedIngredients = [];
          for (const key in responseData) {
            loadedIngredients.push({
              id: key,
              title: responseData[key].title,
              amount: responseData[key].amount
            });
          }
          onLoadIngredients(loadedIngredients);
        })
      }

      //Cleanup function
      /* Will run for the previous effect before the new effect is applied, so this cleans up the old timer before it sets a new one*/
      /* If we dont have dependencies, this will be executed when the component unmount */
      return () => {
        clearTimeout(timer);
      };
    }, 500);
  }, [enteredFilter, onLoadIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input 
            ref={inputRef}
            type="text" 
            value={enteredFilter} 
            onChange={e => setEnteredFilter(e.target.value)} 
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
