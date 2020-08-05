import React from 'react';
import CardRecipes from '../../components/CardRecipes';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import BottomMenu from '../../components/BottomMenu';

export default function MainRecipes() {
  return (
    <div>
      <Header />
      <Categories />
      <CardRecipes datatest="recipe" />
      <BottomMenu />
    </div>
  );
}
