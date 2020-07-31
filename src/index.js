import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecipesProvider } from './contexts/RecipesContext';

ReactDOM.render(
  <RecipesProvider>
    <App />
  </RecipesProvider>,
  document.getElementById('root'),
);
