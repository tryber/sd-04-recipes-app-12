import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useRecipes } from '../contexts/RecipesContext';

const CardRecipes = ({ type, datatest }) => {
  const { recipes, loading } = useRecipes();
  return !loading ? (
    <div>
      {recipes.map((recipe, index) => (
        <Link key={recipe.id} to={`${type === 'meal' ? '/comidas/' : '/bebidas/'}${recipe.id}`}>
          <div data-testid={`${index}-${datatest}-card`}>
            <img src={recipe.image} alt="imagem" data-testid={`${index}-card-img`} />
            <p data-testid="recipe-category">
              {`${recipe.category}
            ${recipe.alcoholicOrNot ? recipe.alcoholicOrNot : ''}`}
            </p>
            <p
              data-testid={`${index}-${datatest === 'recipe' ? 'card' : datatest}-${
                datatest === 'recipe' ? 'name' : 'title'
              }`}
            >
              {recipe.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  ) : <p>loading...</p>;
};

CardRecipes.propTypes = {
  type: PropTypes.string.isRequired,
  datatest: PropTypes.string.isRequired,
};

export default CardRecipes;
