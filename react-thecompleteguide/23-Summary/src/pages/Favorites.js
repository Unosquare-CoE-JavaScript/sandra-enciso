/* get all the favorites from the context */
import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {

    const favoritesCtx = useContext(FavoritesContext); //The current context snapshot
    
    let content;

    if(favoritesCtx.totalFavorites === 0){ // dont have favorites
        content = <p>You got no favorites yet. Start adding some?</p>
    }else{
        content = <MeetupList meetups={favoritesCtx.favorites} />; /* Returns an array of favorites */
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default FavoritesPage;