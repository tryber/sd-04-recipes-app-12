import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as fetch from '../services/recipesAPI';
import { getType } from '../functions/type';
import Footer from './BottomMenu';

const ExploreIngredient = () => {
  const type = getType(useRouteMatch());
  const [ingredients, setIngredient] = useState([]);

  // prettier-ignore
  useEffect(() => {
    setIngredient([]);
    fetch.getIngredientsList(type)
      .then((data) => setIngredient((data.drinks || data.meals).slice(0, 12)));
  }, [type]);

  return ingredients.length > 0 ? (
    <div>
      <div className="explore-ingredients">
        {ingredients.map((ingredient, index) => {
          const name = ingredient.strIngredient || ingredient.strIngredient1;
          return (
            <div>
              <Link
                to={{
                  pathname: `${type === 'meal' ? '/comidas/' : '/bebidas/'}`,
                  state: {
                    datatest: 'recipe', qtd: 12, by: 'ingredient', info: name,
                  },
                }}
              >
                <button
                  type="button"
                  data-testid={`${index}-ingredient-card`}
                >
                  <img
                    src={`https://www.the${type}db.com/images/ingredients/${name}-Small.png`}
                    alt={`${name} thumbnail`}
                    data-testid={`${index}-card-img`}
                  />
                  <p className="ingredient-title" data-testid={`${index}-card-name`}>
                    {name}
                  </p>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default ExploreIngredient;
