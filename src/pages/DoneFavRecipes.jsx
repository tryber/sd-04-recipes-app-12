import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TypeFilterButtons from '../components/TypeFilterButtons';
import Header from '../components/Header';
import RecipeInfo from '../components/DoneFavRecipes/RecipeInfo';

const FavoritesRecipes = () => {
  const [filter, setFilter] = useState();
  const [recipesList, setRecipesList] = useState([]);
  const isFav = useLocation().pathname.includes('favoritas');
  const localPath = isFav ? 'favoriteRecipes' : 'doneRecipes';
  useEffect(() => {
    const checkLocalStorage = () => {
      const allDone = localStorage[localPath] ? JSON.parse(localStorage[localPath]) : null;
      if (allDone) {
        setRecipesList(allDone.filter((recipe) => !filter || recipe.type === filter));
      }
    };
    checkLocalStorage();
    window.addEventListener('storage', checkLocalStorage);
    return () => {
      window.removeEventListener('storage', checkLocalStorage);
    };
  }, []);

  return (
    <div>
      <Header />
      <TypeFilterButtons setFilter={setFilter} />
      {recipesList.map((info, i) => <RecipeInfo info={info} index={i} isFav={isFav} />)}
    </div>
  );
};

export default FavoritesRecipes;
