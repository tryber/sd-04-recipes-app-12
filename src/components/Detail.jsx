import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Part from './PartsDetail';

export default function Detail({ recipe, status }) {
  const { pathname } = useLocation();
  return (
    <div>
      {Part.getHeaderRecipe(recipe)}
      {Part.getIngredientsList(status, recipe, null, null)}
      {Part.getInstructions(recipe)}
      {Part.getVideo(recipe)}
      {Part.getRecommended('recomendation', 6)}
      {Part.getButtonStart(recipe[0].id, pathname)}
    </div>
  );
}

Detail.propTypes = {
  status: PropTypes.string.isRequired,
  recipe: PropTypes.arrayOf(PropTypes.object).isRequired,
};
