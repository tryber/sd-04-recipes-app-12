import React from 'react';
import { Link } from 'react-router-dom';
import { drinkIcon, exploreIcon, mealIcon } from '../images/';

const BottomMenu = () => {
  return (
    <footer>
      <Link to="/:type">
        <img src={drinkIcon} alt="drink-icon" />
      </Link>
      <Link to="/explore">
        <img src={exploreIcon} alt="explore-icon" />
      </Link>
      <Link to="/:type">
        <img src={mealIcon} alt="meal-icon" />
      </Link>
    </footer>
  )
}

export default BottomMenu;
