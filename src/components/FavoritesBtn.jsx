import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const saveFavorite = (recipe, setFavoriteIcon, favoriteIcon) => {
  const { id, type, area, category, alcoholicOrNot, name, image } = recipe;
  const typeRecipes = { Drink: 'bebida', Meal: 'comida' };

  const favorites = localStorage.getItem('favoriteRecipes')
    ? JSON.parse(localStorage.getItem('favoriteRecipes'))
    : [];
  // prettier-ignore
  const newFavorites = (favoriteIcon.includes('whiteHeartIcon')) ? [...favorites, {
    id,
    type: typeRecipes[type],
    area: area || '',
    category: category || '',
    alcoholicOrNot: alcoholicOrNot || '',
    name,
    image,
  }] : favorites.filter((recipeCurrent) => recipeCurrent.id !== recipe.id);

  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  setFavoriteIcon(favoriteIcon.includes('whiteHeartIcon') ? blackHeartIcon : whiteHeartIcon);
};

const FavoriteBtn = ({ dataTestId, recipe }) => {
  const [favoriteIcon, setFavoriteIcon] = useState(whiteHeartIcon);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (favorites.find((favorite) => favorite.id === recipe.id)) {
      setFavoriteIcon(blackHeartIcon);
    }
  }, [recipe]);

  return (
    <button
      type="button"
      className="invisible-btn"
      onClick={() => saveFavorite(recipe, setFavoriteIcon, favoriteIcon)}
    >
      <img data-testid={dataTestId} src={favoriteIcon} alt="share" className="ruby-filter" />
    </button>
  );
};

FavoriteBtn.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FavoriteBtn;
