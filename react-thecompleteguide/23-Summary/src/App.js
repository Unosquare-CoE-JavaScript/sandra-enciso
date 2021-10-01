import { Route, Switch } from 'react-router-dom';
/* Route is a component and the job of the route component is to define different paths in the URL we wanna listen to and which component should be loaded for these different paths */

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  //path takes a string and that will be the path in the UR after your domain. So the part after the domain is the path and here we define for which path, which component should be loaded
  /* '/' is the default path 'root page' or 'index' */
  return (
    //Renders all the pages which matches with the path
    //Using Switch, renders only one of these routes
    <Layout>
      <Switch>
        <Route path='/' exact={true}> {/* setting exact as true, renders the page only if is the exact path, otherwise, renders if the path starts with '/' */}
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
    
  )
}

export default App;
