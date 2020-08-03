import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Login, MainRecipes, Details } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/comidas"
          render={(props) => <MainRecipes props={props} type="meal" />}
        />
        <Route
          exact
          path="/bebidas"
          render={(props) => <MainRecipes props={props} type="cocktail" />}
        />
        <Route
          exact
          path="/comidas/:id"
          render={(props) => <Details props={props} type="meal" />}
        />
        <Route
          exact
          path="/bebidas/:id"
          render={(props) => <Details props={props} type="cocktail" />}
        />
      </Switch>
    </Router>
  );
}

export default App;
