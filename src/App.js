import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { Main, Details } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/:type" component={Main} />
        <Route path="/:type/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
