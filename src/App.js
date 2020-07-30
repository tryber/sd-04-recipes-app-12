import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Login, Main, Details } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/:type" component={Main} />
      <Route path="/:type/:id" component={Details} />
    </Switch>
  );
}

export default App;
