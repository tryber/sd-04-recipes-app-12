import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const RecipesContext = createContext({});

export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const value = {
    recipes,
    setRecipes,
    loading,
    setLoading,
  };

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
};

export function useRecipes() {
  const context = useContext(RecipesContext);
  return context;
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
