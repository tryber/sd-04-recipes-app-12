import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TypeFilterButtons from '../components/TypeFilterButtons';
import Header from '../components/Header';
import RecipeInfo from '../components/DoneFavRecipes/RecipeInfo';

const FavoritesRecipes = () => {
  const [filter, setFilter] = useState();
  const isFav = useLocation().pathname.includes('favoritas');
  const localPath = isFav ? 'favoriteRecipes' : 'doneRecipes';
  const [recipesList, setRecipesList] = useState(localStorage[localPath]
    ? JSON.parse(localStorage[localPath]) : []);
  const filtered = recipesList.filter((recipe) => !filter || recipe.type === filter);
  const removeFav = (id) => {
    const newFavorites = recipesList.filter((recipeCurrent) => recipeCurrent.id !== id);
    setRecipesList(newFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  };
  return (
    <div>
      <Header />
      <TypeFilterButtons setFilter={setFilter} />
      {filtered.map((info, i) => (
        <RecipeInfo
          info={info}
          index={i}
          isFav={isFav}
          removeFav={removeFav}
        />
      ))}
    </div>
  );
};

export default FavoritesRecipes;
