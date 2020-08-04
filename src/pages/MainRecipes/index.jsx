import React from 'react';
import PropTypes from 'prop-types';
import CardRecipes from '../../components/CardRecipes';
import Categories from '../../components/Categories';
import Header from '../../components/Header';

export default function MainRecipes({ type }) {
  return (
    <div>
      <Header type={type} />
      <Categories type={type} />
      <CardRecipes datatest="recipe" type={type} />
    </div>
  );
}

MainRecipes.propTypes = { type: PropTypes.string.isRequired };
