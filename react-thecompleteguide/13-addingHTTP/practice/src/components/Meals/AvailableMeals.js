import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();//undefined

  useEffect(() => { //fetch the meals when the component did mount
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-39a5b-default-rtdb.firebaseio.com/meals.json');

      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      };

      setMeals(loadedMeals);
      setIsLoading(false);
    };

//keep in mind that fetchMeals is an async function, and therefore, it always returns a promise. Now, if we throw an error instead of a promise, that error will cause that promise to reject
    fetchMeals()
      .catch(error => {
        setIsLoading(false);
        setHttpError(error.message);
      });

  }, []); //The function you pass to useEffect should not return a promise

  /* renders a loading message if is loading the information */
  if(isLoading){
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    )
  }

  /* renders a error message if we have an error */
  if(httpError){
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  //maps a list of meals
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
