import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as fetch from '../services/recipesAPI';
import { useRecipes } from '../contexts/RecipesContext';
import CardRecipes from './CardRecipes';
import Footer from './BottomMenu';
import NotFound from './NotFound';

const ExploreFoodsArea = () => {
  const [areas, setAreas] = useState([]);
  const { type } = useParams();
  const { setRecipes } = useRecipes();
  useEffect(() => {
    fetch.getRecipeAreas('meal')
      .then((data) => setAreas(data.meals));
  }, []);

  const handleSelect = (value) => {
    if (value === 'All') {
      fetch.searchBy('name', '', 'meal', 12)
        .then((data) => setRecipes(data));
    } else {
      fetch.searchBy('area', value, 'meal', 12)
        .then((data) => setRecipes(data));
    }
  };

  return type === 'comidas' ? (
    <div style={{ marginTop: '70px' }}>
      <select
        className="area-select blue-text"
        data-testid="explore-by-area-dropdown"
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option data-testid="All-option">All</option>
        {areas.map((e) => <option data-testid={`${e.strArea}-option`}>{e.strArea}</option>)}
      </select>
      <CardRecipes datatest2="recipe" />
      <Footer />
    </div>
  ) : (
    <NotFound />
  );
};

export default ExploreFoodsArea;
