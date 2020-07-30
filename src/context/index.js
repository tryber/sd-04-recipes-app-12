import { createContext, useContext } from "react";

const context = createContext();

export const RecipesContext = ({ children }) => {
  const value = {};

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>);
}

export const useRecipe = () => {
  const result = useContext(context);
  return result;
}
