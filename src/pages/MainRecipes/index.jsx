import React from 'react';
import CardRecipes from '../../components/CardRecipes';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import BottomMenu from '../../components/BottomMenu';

export default function MainRecipes() {
  return (
    <div>
      <Header showButton />
      <Categories />
      <CardRecipes datatest2="recipe" qtd2={12} />
      <BottomMenu />
    </div>
  );
}
