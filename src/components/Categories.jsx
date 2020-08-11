import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import * as fetch from '../services/recipesAPI';
import CardCategories from './CardCategory';
import { getType } from '../functions/type';

const Categories = () => {
  const type = getType(useRouteMatch());
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState(null);
  const history = useHistory();
  // prettier-ignore
  useEffect(() => {
    fetch.getRecipeCategories(type)
      .then((data) => setCategories((data.drinks || data.meals).slice(0, 5)));
  }, [type]);

  useEffect(() => {
    if (filter !== null) {
      if (filter) {
        history.push({
          pathname: `/${type === 'meal' ? 'comidas' : 'bebidas'}`,
          state: {
            datatest: 'recipe', qtd: 12, by: 'category', info: filter,
          },
        });
      } else {
        history.push({
          pathname: `/${type === 'meal' ? 'comidas' : 'bebidas'}`,
          state: {
            datatest: 'recipe', qtd: 12, by: 'name', info: '',
          },
        });
      }
    }
  }, [filter]);
  // prettier-ignore
  const handleClick = (category) => ((category === 'All' || category === filter)
    ? setFilter('') : setFilter(category));

  return categories.length > 0 ? (
    <CardCategories handleClick={handleClick} categories={categories} />
  ) : (
    <p>loading...</p>
  );
};

export default Categories;
