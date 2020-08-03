import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchBy } from '../../services/recipesAPI';
import { useRecipes } from '../../contexts/RecipesContext';
import CardRecipes from '../../components/CardRecipes';
import Categories from '../../components/Categories';

export default function MainRecipes({ type }) {
  const {
    recipes, updateRecipes, loading, setLoading,
  } = useRecipes();

  useEffect(() => {
    setLoading(true);
    searchBy('name', '', type).then((data) => {
      updateRecipes(data);
      setLoading(false);
    });
  }, []);

  return !loading ? (
    <div>
      <Categories type={type} />
      <CardRecipes recipes={recipes} />
    </div>
  ) : (
      <div>loading...</div>
    );
}

MainRecipes.propTypes = { type: PropTypes.string.isRequired };
