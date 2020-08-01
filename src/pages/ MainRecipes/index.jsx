import React from 'react';
import PropTypes from 'prop-types';
import CardRecipes from '../../components/CardRecipes';
import Categories from '../../components/Categories';

export default function MainRecipes({ type }) {
  return (
    <div>
      <Categories type={type} />
      <CardRecipes type={type} />
    </div>
  );
}

MainRecipes.propTypes = { type: PropTypes.string.isRequired };
