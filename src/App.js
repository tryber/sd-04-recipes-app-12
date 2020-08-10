import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import {
  Login, MainRecipes, Details, Profile, DoneFav, Explore,
} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/perfil" component={Profile} />
        <Route path="/receitas-feitas" component={DoneFav} />
        <Route path="/receitas-favoritas" component={DoneFav} />
        <Route exact path="/comidas" component={MainRecipes} />
        <Route exact path="/bebidas" component={MainRecipes} />
        <Route exact path="/comidas/:id" component={Details} />
        <Route exact path="/bebidas/:id" component={Details} />
        <Route exact path="/bebidas/:id/:status" component={Details} />
        <Route exact path="/comidas/:id/:status" component={Details} />
        <Route exact path="/explorar" component={Explore} />
        <Route exact path="/explorar/:type" component={Explore} />
        <Route exact path="/explorar/:type/:by" component={Explore} />
      </Switch>
    </Router>
  );
}

export default App;
