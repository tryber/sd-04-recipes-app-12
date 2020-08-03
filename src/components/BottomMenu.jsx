import React from 'react';
import { Link } from 'react-router-dom';
import { drinkIcon, exploreIcon, mealIcon } from '../images';
import './CSS/BottomMenu.css';

const BottomMenu = () => (
  <footer className="footer">
    <Link className="btn" to="/bebidas">
      <img src={drinkIcon} alt="drink-icon" />
    </Link>
    <Link to="/explorar">
      <img src={exploreIcon} alt="explore-icon" />
    </Link>
    <Link to="/comidas">
      <img src={mealIcon} alt="meal-icon" />
    </Link>
  </footer>
);

export default BottomMenu;
