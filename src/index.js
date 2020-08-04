import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecipesProvider } from './contexts/RecipesContext';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <RecipesProvider>
    <App />
  </RecipesProvider>,
  document.getElementById('root'),
);
