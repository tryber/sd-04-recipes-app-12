import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

const context = createContext();

export const RecipesContext = ({ children }) => {
  const value = {};

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
};

RecipesContext.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export const useRecipe = () => {
  const result = useContext(context);
  return result;
};
