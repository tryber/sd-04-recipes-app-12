import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import MainRecipes from './pages/ MainRecipes/index';
import Details from './pages/Details/index';

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
        <Route path="/:type/:id" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
