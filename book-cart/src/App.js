import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './components/Homepage';
import BookPage from './components/Book';
import CartPage from './components/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage  />
        </Route>
        <Route  exact path="/book/:id">
          <BookPage  />
        </Route>
        <Route  exact path="/cart">
          <CartPage  />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
