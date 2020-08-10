import React, { useEffect } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRecipes } from '../contexts/RecipesContext';
import { getTypeInverted, getType } from '../functions/type';
import * as fetch from '../services/recipesAPI';

const CardRecipes = () => {
  const {
    recipes, loading, setRecipes, setLoading,
  } = useRecipes();
  const { state: { datatest, qtd } } = useLocation();
  const typeInverted = getTypeInverted(datatest, useRouteMatch());
  const type = getType(useRouteMatch());
  useEffect(() => {
    async function fetchRecipes() {
      setLoading(true);
      fetch.searchBy('name', '', typeInverted, qtd).then((data) => {
        setRecipes(data);
        setLoading(false);
      });
    }
    fetchRecipes();
  }, [type]);

  return !loading ? (
    <div>
      {recipes.map((recipe, index) => (
        <Link
          key={recipe.id}
          to={{ pathname: `${typeInverted === 'meal' ? '/comidas/' : '/bebidas/'}${recipe.id}`, state: { datatest: 'recomendation', qtd: 6 } }}
        >
          <div data-testid={`${index}-${datatest}-card`} className="card">
            <img
              src={recipe.image}
              alt="imagem"
              data-testid={`${index}-card-img`}
              className="card-image"
            />
            <p data-testid="recipe-category">
              {`${recipe.category ? recipe.category : ''}
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
  ) : (
    <p>loading...</p>
  );
};

CardRecipes.propTypes = {
  datatest: PropTypes.string.isRequired,
  qtd: PropTypes.number.isRequired,
};

export default CardRecipes;
