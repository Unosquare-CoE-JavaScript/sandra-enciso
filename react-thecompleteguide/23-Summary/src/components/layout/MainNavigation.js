import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";

import classes from './MainNavigation.module.css'; //The css classes that you define in this css file, will be properties of this object and you can use them in your JSX code
import FavoritesContext from '../../store/favorites-context';

function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link> {/* Link acts like an anchor tag, but when you click on it it prevent that browser default sending a request, and instead
                        just parse the url you want to go to and change it in the browser URL bar but not send a new request */}
                    </li> 
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li> 
                    <li>
                        <Link to='/favorites'>
                            My Favorites
                            <span className={classes.badge}>
                                {favoritesCtx.totalFavorites}
                            </span>
                        </Link>
                    </li> 
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;