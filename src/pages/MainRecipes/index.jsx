import React from 'react';
import PropTypes from 'prop-types';
import CardRecipes from '../../components/CardRecipes';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import BottomMenu from '../../components/BottomMenu';

export default function MainRecipes({ type }) {
  return (
    <div>
      <Header type={type} />
      <Categories type={type} />
      <CardRecipes datatest="recipe" type={type} />
      <BottomMenu />
    </div>
  );
}

MainRecipes.propTypes = { type: PropTypes.string.isRequired };
