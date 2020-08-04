import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import * as fetch from '../../services/recipesAPI';
import { useRecipes } from '../../contexts/RecipesContext';
import CardRecipes from '../../components/CardRecipes';

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

const getInstructions = ([first]) => (
  <div>
    <h2>instructions</h2>
    <p data-testid="instructions">{first.instructions}</p>
  </div>
);
export default function Details({
  props: {
    match: {
      params: { id },
    },
  },
  type,
}) {
  const { setRecipes, setLoading } = useRecipes();
  const [recipesDetails, setRecipesDetails] = useState([]);
  useEffect(() => {
    async function fetchRecipes() {
      setRecipesDetails([]);
      await fetch.getRecipeDetailsById(id, type).then((data) => {
        setRecipesDetails(data);
      });
      setLoading(true);
      fetch.searchBy('name', '', `${type === 'meal' ? 'cocktail' : 'meal'}`, 6).then((data) => {
        setRecipes(data);
        setLoading(false);
      });
    }
    fetchRecipes();
  }, [type]);

  return recipesDetails.length > 0 ? (
    <div>
      <img src={recipesDetails[0].image} alt="imagem" data-testid="recipe-photo" />
      <p data-testid="recipe-title">{recipesDetails[0].name}</p>
      <p data-testid="recipe-category">
        {`${recipesDetails[0].category} ${
          recipesDetails[0].alcoholicOrNot ? recipesDetails[0].alcoholicOrNot : ''
        }`}
      </p>
      <button type="button" data-testid="share-btn">
        share
      </button>
      <button type="button" data-testid="favorite-btn">
        favorite
      </button>
      {getIngredients(recipesDetails)}
      {getInstructions(recipesDetails)}
      {getVideo(recipesDetails)}
      <h4>Recomendadas</h4>
      <CardRecipes datatest="recomendation" type={`${type === 'meal' ? 'cocktail' : 'meal'}`} />
      <button type="button" data-testid="start-recipe-btn">
        Iniciar receitas
      </button>
    </div>
  ) : (
    <div>loading...</div>
  );
}

Details.propTypes = {
  props: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
};
