/* Route is a component that allows to define a certain path and then React component that should be loaded when that path becomes active in the URL */
/* Switch Renders the first child <Route> or <Redirect> that matches the location. */
/* Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack */
import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

/* Here we define our routes */
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch> {/* Only one of these routes will be active at the same time */}
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'> {/* This route should become active if we have our-domain/welcome */}
            <Welcome />
          </Route>
          {/*The exact prop tells React router that this should only lead to a match if we have an exact match*/}
          <Route path='/products' exact> {/* This route should become active if we have our-domain/welcome */}
            <Products />
          </Route>
          <Route path='/products/:productId'> {/* This is a dynamic path */}
            <ProductDetail />
          </Route> 
        </Switch>     
      </main>
    </div>
  );
}

export default App;

/*
The goal for using react-router-dom is that we're able to handle different paths on our page and load different components for the differents paths
*/