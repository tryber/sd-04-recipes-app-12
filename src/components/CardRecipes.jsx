import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { useRecipes } from '../contexts/RecipesContext';

const CardRecipes = ({ type }) => {
  const { recipes, loading } = useRecipes();
  return !loading ? (
    <div>
      {recipes.map((recipe, index) => (
        <Link to={`${type === 'meal' ? '/comidas/' : '/bebidas/'}${recipe.id}`}>
          <div key={recipe.id} type="button" data-testid={`${index}-recipe-card`}>
            <img src={recipe.image} alt="imagem" data-testid={`${index}-card-img`} />
            <p data-testid={`${index}-card-name`}>{recipe.name}</p>
          </div>
        </Link>
      ))}
    </div>
  ) : <p>loading...</p>;
};

CardRecipes.propTypes = {
  type: PropTypes.string.isRequired,
};

export default withRouter(CardRecipes);
