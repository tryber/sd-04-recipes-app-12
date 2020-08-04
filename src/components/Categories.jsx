import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as fetch from '../services/recipesAPI';
import { useRecipes } from '../contexts/RecipesContext';
import CardCategories from './CardCategory';

const Categories = ({ type }) => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState('');
  const { setRecipes, setLoading } = useRecipes();
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
      setRecipes(data);
      setLoading(false);
    });
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

Categories.propTypes = { type: PropTypes.string.isRequired };

export default Categories;
