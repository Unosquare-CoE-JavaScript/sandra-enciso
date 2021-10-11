/* The context is only stored in memory */
import { createContext, useState } from "react";

/* create a context. Context is a JS object  */
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

/* This is a React component, but the job of this component is providing this context to all the components that are interested in listening to the values
This will also be responsible for updating the context values  */
export function FavoritesContextProvider(props){
//When we change the state, the component that is wrapped will execute again and will be re-evaluated, and that means that if we change our context value in this component
//and we pass this context value to the provider, all components that are listening to our context will be updated and will get that latest updated data

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId) { //this function handles if an item is favorite or not
        return userFavorites.some(meetup => meetup.id === meetupId); //The some() method checks if any of the elements in an array pass a test (provided as a function).
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    //This provider component needs to be wrapped around all the components that are interested in interacting with that context
    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;