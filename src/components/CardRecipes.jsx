import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useRecipes } from '../contexts/RecipesContext';

const CardRecipes = ({ history, type }) => {
  const { recipes, loading } = useRecipes();
  return !loading ? (
    <div>
      {recipes.map((recipe, index) => (
        <li key={recipe.id}>
          <button
            type="button"
            data-testid={`${index}-recipe-card`}
            onClick={
              // prettier-ignore
              () => history.push(
                `${type === 'meal' ? '/comidas/' : '/bebidas/'}${recipe.id}`,
              )
            }
          >
            <img src={recipe.image} alt="imagem" data-testid={`${index}-card-img`} />
            <p data-testid={`${index}-card-name`}>{recipe.name}</p>
          </button>
        </li>
      ))}
    </div>
  ) : (
    <p>loading...</p>
  );
};

CardRecipes.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
};

export default withRouter(CardRecipes);
