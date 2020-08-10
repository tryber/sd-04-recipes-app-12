import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import * as LocalStorage from '../functions/localStorage';
import * as Part from './PartsDetail';
import { getType } from '../functions/type';

export default function DetailInProgress({ recipe, status }) {
  const [recipeCurrent] = recipe;
  const type = getType(useRouteMatch());
  const [ingredientCheck, setCheckIngredient] = useState(JSON.parse(localStorage.getItem('inProgressRecipes'))[`${type}s`][recipeCurrent.id]);

  function handleCheck(ingredient) {
    if (ingredientCheck.includes(ingredient.name)) {
      LocalStorage.removeRecipeInProgress(type, recipeCurrent.id, ingredient.name);
      setCheckIngredient(ingredientCheck.filter((igdt) => igdt !== ingredient.name));
    } else {
      LocalStorage.updateRecipeInProgress(type, recipeCurrent.id, ingredient.name);
      setCheckIngredient([...ingredientCheck, ingredient.name]);
    }
  }

  const validateFinish = () => ingredientCheck.length === recipeCurrent.ingredients.length;

  return (
    <div>
      {Part.getHeaderRecipe(recipe)}
      {Part.getIngredientsList(status, recipe, handleCheck, ingredientCheck)}
      {Part.getInstructions(recipe)}
      {Part.getButtonFinish(recipe, validateFinish)}
    </div>
  );
}

DetailInProgress.propTypes = {
  status: PropTypes.string.isRequired,
  recipe: PropTypes.arrayOf(PropTypes.object).isRequired,
};
