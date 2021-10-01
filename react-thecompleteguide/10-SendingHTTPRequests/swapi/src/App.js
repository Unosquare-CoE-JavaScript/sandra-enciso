/*
REST API. Means that there are couple of URLs, to which you send that request to get back data in a certain format, and different URLs to which you send different requests,
will give you different chinkd of data. Thas what makes it an API
*/
import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsloading(true);
    setError(null);
    try {
      //The default method of fetch is GET
      const response = await fetch('https://swapi.dev/api/films/') //Sending HTTP request from inside React apps to a backend
      /* Feth API doesn't treat error status codes as real errors. It will not throw a technical error if we get back an error status code 
      Axios, on other hand, would generate and throw a real error for error status code*/

      if(!response.ok){ //handling errors using fetch
        throw new Error('Something went wrong!');
      }
      const data = await response.json(); //transform a json to a js object

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          relaseDate: movieData.realese_date
        }
      });
      setMovies(transformedMovies);      
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  }, []); 

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  //Using async await
  // async function fetchMoviesHandler(){
  //   setIsloading(true);
  //   setError(null);
  //   try {
  //     //The default method of fetch is GET
  //     const response = await fetch('https://swapi.dev/api/films/') //Sending HTTP request from inside React apps to a backend
  //     /* Feth API doesn't treat error status codes as real errors. It will not throw a technical error if we get back an error status code 
  //     Axios, on other hand, would generate and throw a real error for error status code*/

  //     if(!response.ok){ //handling errors using fetch
  //       throw new Error('Something went wrong!');
  //     }
  //     const data = await response.json(); //transform a json to a js object

  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         relaseDate: movieData.realese_date
  //       }
  //     });
  //     setMovies(transformedMovies);      
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsloading(false);
  // } 

  //Using Promises
  /* function fetchMoviesHandler(){
    //The default method of fetch is GET
    fetch('https://swapi.dev/api/films/') //Sending HTTP request from inside React apps to a backend
    .then(response => {
      return response.json(); //transform a json to a js object
    }).then(data => {
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          relaseDate: movieData.realese_date
        }
      });
      setMovies(transformedMovies);
    })
    .catch(); //to handle errors
  } */

  let content = <p>Found no movies.</p>;

  if(movies.length > 0){
    content = <MoviesList movies={movies} />;
  }

  if(error){
    content = <p>{error}</p>;
  }

  if(isLoading){
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
