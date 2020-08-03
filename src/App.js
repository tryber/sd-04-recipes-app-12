import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
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
