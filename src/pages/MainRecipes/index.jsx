import React from 'react';
import CardRecipes from '../../components/CardRecipes';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import BottomMenu from '../../components/BottomMenu';
import './index.css';

export default function MainRecipes() {
  return (
    <div className="main">
      <Header />
      <Categories />
      <CardRecipes datatest="recipe" qtd={12} />
      <BottomMenu />
    </div>
  );
}
