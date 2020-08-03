import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as fetch from '../services/recipesAPI';
import { useRecipes } from '../contexts/RecipesContext';
import CardCategories from './CardCategory';

const Categories = ({ type }) => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');
  const { updateRecipes, setLoading } = useRecipes();
  // prettier-ignore
  useEffect(() => {
    fetch.getRecipeCategories(type)
      .then((data) => setCategories((data.drinks || data.meals).slice(0, 5)));
  }, [type]);

  useEffect(() => {
    setLoading(true);
    const fetchRecipes = filter
      ? fetch.searchRecipesByCategory(filter, type)
      : fetch.searchBy('name', '', type);
    fetchRecipes.then((data) => {
      updateRecipes(data);
      setLoading(false);
    });
  }, [filter, setLoading, type, updateRecipes]);
  // prettier-ignore
  const handleClick = (category) => ((category === 'All' || category === filter)
    ? setFilter('') : setFilter(category));

  if (categories.length > 0) {
    return <CardCategories handleClick={handleClick} categories={categories} />;
  }

  return <p>loading...</p>;
};

Categories.propTypes = { type: PropTypes.string.isRequired };

export default Categories;
