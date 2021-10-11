/* This is our main component and renders a page of products, page of favorites and a counter
the context of the products and the context of the counter are separated */
import React from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import Counter from './containers/Counter';

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
        <Counter />
      </main>
    </React.Fragment>
  );
};

export default App;
