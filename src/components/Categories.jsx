import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as fetch from '../services/recipesAPI';
import { useRecipes } from '../contexts/RecipesContext';
import CardCategories from './CardCategory';
import { getType } from '../functions/type';

const Categories = () => {
  const type = getType(useRouteMatch());
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
  }, [filter, setRecipes, setLoading, type]);
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
