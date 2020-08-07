import React, { useEffect } from 'react';
import * as LocalStorage from '../functions/localStorage';

export default function IngredientList({
  recipe, type, status, igtsChecked, setIgtsChecked,
}) {
  const [recipeCurrent] = recipe;

  function handleCheck(ingredient) {
    console.log(ingredient);
    if (igtsChecked.includes(ingredient.name)) {
      LocalStorage.removeRecipeInProgress(type, recipeCurrent.id, ingredient.name);
      setIgtsChecked(igtsChecked.filter((igdt) => igdt !== ingredient.name));
    } else {
      LocalStorage.updateRecipeInProgress(type, recipeCurrent.id, ingredient.name);
      setIgtsChecked([...igtsChecked, ingredient.name]);
    }
  }
  useEffect(() => {
    if (status === 'in-progress') {
      LocalStorage.saveRecipeInProgress(recipeCurrent.id, type, status);
    }
  }, [status]);

  useEffect(() => {
    const ingredients = localStorage.getItem('inProgressRecipes')
      ? JSON.parse(localStorage.getItem('inProgressRecipes'))[`${type}s`]
      : {};
    setIgtsChecked(ingredients[recipeCurrent.id] ? ingredients[recipeCurrent.id] : []);
  }, []);

  return (
    <div>
      <h1>Ingredients</h1>
      {status === 'in-progress'
        ? recipeCurrent.ingredients.map((ingredient, index) => (
          <li key={ingredient.name}>
            <input
              data-testid={`${index}-ingredient-step`}
              name={`${ingredient.name} - ${index}`}
              type="checkbox"
              checked={igtsChecked.includes(ingredient.name)}
              onChange={() => handleCheck(ingredient)}
            />
            <label htmlFor={`${ingredient.name} - ${index}`}>
              {`${ingredient.name} - ${ingredient.quantity}`}
            </label>
          </li>
        )) : recipeCurrent.ingredients.map((ingredient, index) => (
          <li key={ingredient.name}>
            <span data-testid={`${index}-ingredient-name-and-measure`}>
              {`${index}-${ingredient.name}-and-${ingredient.quantity}`}
            </span>
          </li>
        ))}
    </div>
  );
}
