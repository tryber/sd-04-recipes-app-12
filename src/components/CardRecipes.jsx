import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const CardRecipes = ({ recipes, history }) => (
  <div>
    {recipes.map((recipe, index) => (
      <li key={recipe.id}>
        <button
          type="button"
          data-testid={`${index}-recipe-card`}
          onClick={() => history.push(`/comidas/${recipe.id}`)}
        >
          <img src={recipe.image} alt="imagem" data-testid={`${index}-card-img`} />
          <p data-testid={`${index}-card-name`}>{recipe.name}</p>
        </button>
      </li>
    ))}
  </div>
);

CardRecipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default withRouter(CardRecipes);
