import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import * as LocalStorage from '../functions/localStorage';

const handleFavorite = (recipe, setFavoriteIcon, favoriteIcon) => {
  if (favoriteIcon.includes('whiteHeartIcon')) {
    LocalStorage.saveRecipeFavorite(recipe);
  } else {
    LocalStorage.removeRecipeFavorite(recipe);
  }
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
    <button type="button" onClick={() => handleFavorite(recipe, setFavoriteIcon, favoriteIcon)}>
      <img data-testid={dataTestId} src={favoriteIcon} alt="share" className="ruby-filter" />
    </button>
  );
};

FavoriteBtn.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FavoriteBtn;
