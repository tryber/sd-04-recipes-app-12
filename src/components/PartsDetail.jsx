import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import * as LocalStorage from '../functions/localStorage';
import ShareBtn from './ShareBtn';
import FavoritesBtn from './FavoritesBtn';
import CardRecipes from './CardRecipes';

export const getHeaderRecipe = ([recipe]) => (
  <div>
    <img src={recipe.image} alt="imagem" data-testid="recipe-photo" />
    <p data-testid="recipe-title">{recipe.name}</p>
    <p data-testid="recipe-category">
      {`${recipe.category} ${recipe.alcoholicOrNot ? recipe.alcoholicOrNot : ''}`}
    </p>
    <ShareBtn dataTestId="share-btn" id={recipe.id} type={recipe.type} />
    <FavoritesBtn dataTestId="favorite-btn" recipe={recipe} />
  </div>
);

export const getIngredientsList = (status, [recipeCurrent], handleCheck, igtsChecked) => (
  <div>
    <h1>Ingredients</h1>
    {status === 'in-progress'
      ? recipeCurrent.ingredients.map((ingredient, index) => (
        <li key={ingredient.name} data-testid={`${index}-ingredient-step`}>
          <input
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

export const getInstructions = ([recipe]) => (
  <div>
    <h2>instructions</h2>
    <p data-testid="instructions">{recipe.instructions}</p>
  </div>
);

const opts = {
  height: '198',
  width: '324',
  playerVars: {
    autoplay: 1,
  },
};

export const getVideo = ([recipe]) => (
  <div>
    <h2>Video</h2>
    {recipe.youtube && (
      <div data-testid="video">
        <YouTube videoId={recipe.youtube.split('=')[1]} opts={opts} />
      </div>
    )}
  </div>
);

export const getRecommended = (datatest, qtd) => (
  <div className="recommended-recipes">
    <h4>Recomendadas</h4>
    <CardRecipes datatest={datatest} qtd={qtd} />
  </div>
);

export const getButtonStart = (id, pathname) => {
  const status = LocalStorage.getStatusRecipes(id);
  return (
    status && (
      <Link
        to={`${pathname}/in-progress`}
        className="button-start"
        data-testid="start-recipe-btn"
      >
        {status}
      </Link>
    )
  );
};

export const getButtonFinish = ([recipe], validateFinish) => (
  <Link to="/receitas-feitas">
    <button
      type="button"
      disabled={!validateFinish()}
      data-testid="finish-recipe-btn"
      onClick={() => LocalStorage.saveRecipeDone(recipe)}
    >
      Finalizar Receita
    </button>
  </Link>
);
