import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import {
  Link, useParams, useRouteMatch, useLocation,
} from 'react-router-dom';
import * as fetch from '../../services/recipesAPI';
import * as LocalStorage from '../../functions/localStorage';
import CardRecipes from '../../components/CardRecipes';
import ShareBtn from '../../components/ShareBtn';
import FavoritesBtn from '../../components/FavoritesBtn';
import IngredientsList from '../../components/IngredientList';
import { getType } from '../../functions/type';
import './Details.css';

const opts = {
  height: '198',
  width: '324',
  playerVars: {
    autoplay: 1,
  },
};

const getVideo = ([recipe]) => (
  <div>
    <h2>Video</h2>
    {recipe.youtube && (
      <div data-testid="video">
        <YouTube videoId={recipe.youtube.split('=')[1]} opts={opts} />
      </div>
    )}
  </div>
);

const getHeaderRecipe = ([recipe]) => (
  <div>
    <img src={recipe.image} alt="imagem" data-testid="recipe-photo" />
    <p data-testid="recipe-title">{recipe.name}</p>
    <p data-testid="recipe-category">
      {`${recipe.category} ${recipe.alcoholicOrNot ? recipe.alcoholicOrNot : ''}`}
    </p>
    <ShareBtn testId="share-btn" />
    <FavoritesBtn dataTestId="favorite-btn" recipe={recipe} />
  </div>
);

const getRecommended = () => (
  <div className="recommended-recipes">
    <h4>Recomendadas</h4>
    <CardRecipes datatest="recomendation" qtd={6} />
  </div>
);

const getInstructions = ([recipe]) => (
  <div>
    <h2>instructions</h2>
    <p data-testid="instructions">{recipe.instructions}</p>
  </div>
);

const getButtonStart = (id, pathname) => {
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

const getButtonFinish = ([recipe], igtsChecked) => (
  (
    <Link
      to="d"
      disable
      className="button-start"
      data-testid="finish-recipe-btn"
    >
      Finalizar Receita
    </Link>
  )
);

export default function Details() {
  const [recipesDetails, setRecipesDetails] = useState([]);
  const [igtsChecked, setIgtsChecked] = useState([]);
  const { id, status } = useParams();
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
      <IngredientsList
        recipe={recipesDetails}
        type={type}
        igtsChecked={igtsChecked}
        setIgtsChecked={setIgtsChecked}
        status={status}
      />
      {getInstructions(recipesDetails)}
      {!(status === 'in-progress') && getVideo(recipesDetails)}
      {!(status === 'in-progress') && getRecommended(type)}
      {!(status === 'in-progress') ? getButtonStart(id, pathname, type)
        : getButtonFinish(recipesDetails, igtsChecked)}
    </div>
  ) : (
    <div>loading...</div>
  );
}
