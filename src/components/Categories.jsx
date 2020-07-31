import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as fetch from '../services/recipesAPI';
import { useRecipes } from '../contexts/RecipesContext';
import CardCategories from './CardCategory';

const Categories = ({ type }) => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');
  const { updateRecipes } = useRecipes();
  // prettier-ignore
  useEffect(() => {
    fetch.getRecipeCategories(type)
      .then((data) => setCategories((data.drinks || data.meals).slice(0, 5)));
  }, [type]);

  useEffect(() => {
    if (filter) {
      fetch.searchRecipesByCategory(filter, type).then((data) => {
        updateRecipes(data);
      });
    }
  }, [filter]);
  // prettier-ignore
  const handleClick = (category) => ((category === 'All' || category === filter)
    ? setFilter('') : setFilter(category));

  return <CardCategories handleClick={handleClick} categories={categories} />;
};

Categories.propTypes = { type: PropTypes.string.isRequired };

export default Categories;
