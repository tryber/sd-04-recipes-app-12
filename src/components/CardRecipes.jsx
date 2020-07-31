import React from 'react';
import PropTypes from 'prop-types';

const CardRecipes = ({ recipes }) => (
  <div>
    {recipes.map((recipe, index) => (
      <li key={recipe.id} data-testid={`${index}-recipe-card`}>
        <img src={recipe.image} alt="imagem" data-testid={`${index}-card-img`} />
        <p data-testid={`${index}-card-name`}>{recipes.name}</p>
      </li>
    ))}
  </div>
);

CardRecipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default CardRecipes;
