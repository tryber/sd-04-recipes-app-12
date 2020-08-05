import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Link, useParams, useRouteMatch, useLocation } from 'react-router-dom';
import * as fetch from '../../services/recipesAPI';
import CardRecipes from '../../components/CardRecipes';
import ShareBtn from '../../components/ShareBtn';
import { getType } from '../../functions/type';

const opts = {
  height: '198',
  width: '324',
  playerVars: {
    autoplay: 1,
  },
};

const getVideo = ([first]) => (
  <div>
    <h2>Video</h2>
    {first.youtube && (
      <div data-testid="video">
        <YouTube videoId={first.youtube.split('=')[1]} opts={opts} />
      </div>
    )}
  </div>
);

const getHeaderRecipe = ([first]) => (
  <div>
    <img src={first.image} alt="imagem" data-testid="recipe-photo" />
    <p data-testid="recipe-title">{first.name}</p>
    <p data-testid="recipe-category">
      {`${first.category} ${first.alcoholicOrNot ? first.alcoholicOrNot : ''}`}
    </p>
    <ShareBtn testId="" />
    <button type="button" data-testid="favorite-btn">
      favorite
    </button>
  </div>
);

const getIngredients = ([first]) => (
  <div>
    <h1>Ingredients</h1>
    {first.ingredients.map((ingredient, index) => (
      <li key={ingredient.name}>
        <span data-testid={`${index}-ingredient-name-and-measure`}>
          {`${index}-${ingredient.name}-and-${ingredient.quantity}`}
        </span>
      </li>
    ))}
  </div>
);

const getRecommended = () => (
  <div className="recommended-recipes">
    <h4>Recomendadas</h4>
    <CardRecipes datatest="recomendation" />
  </div>
);

const getInstructions = ([first]) => (
  <div>
    <h2>instructions</h2>
    <p data-testid="instructions">{first.instructions}</p>
  </div>
);

const getStatusRecipes = (id) => {
  const DoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'))
    ? JSON.parse(localStorage.getItem('doneRecipes')).some((recipe) => recipe.id === id)
    : false;
  // prettier-ignore
  const ProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
    ? Object.keys(JSON.parse(localStorage.getItem('inProgressRecipes'))).some(
      (key) => JSON.parse(localStorage.getItem('inProgressRecipes'))[key][id],
    ) : false;

  return DoneRecipes ? false : ProgressRecipes ? 'Continuar Receita' : 'Iniciar Receita';
};

const getButtonStart = (id, pathname) => {
  const status = getStatusRecipes(id);
  return (
    status && (
      <Link to={`${pathname}/in-progress`} className="button-start" data-testid="start-recipe-btn">
        {status}
      </Link>
    )
  );
};
export default function Details() {
  const [recipesDetails, setRecipesDetails] = useState([]);
  const { id } = useParams();
  const type = getType(useRouteMatch());
  const { pathname } = useLocation();
  useEffect(() => {
    async function fetchRecipes() {
      setRecipesDetails([]);
      await fetch.getRecipeDetailsById(id, type).then((data) => {
        setRecipesDetails(data);
      });
    }
    fetchRecipes();
  }, [type]);

  return recipesDetails.length > 0 ? (
    <div>
      {getHeaderRecipe(recipesDetails)}
      {getIngredients(recipesDetails)}
      {getInstructions(recipesDetails)}
      {getVideo(recipesDetails)}
      {getRecommended(type)}
      {getButtonStart(id, pathname)}
    </div>
  ) : (
    <div>loading...</div>
  );
}
