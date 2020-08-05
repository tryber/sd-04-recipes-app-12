import React from 'react';
import CardRecipes from '../../components/CardRecipes';
import Categories from '../../components/Categories';
import Header from '../../components/Header';

export default function MainRecipes() {
  return (
    <div>
      <Header />
      <Categories />
      <CardRecipes datatest="recipe" />
    </div>
  );
}
