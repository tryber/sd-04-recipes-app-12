import PropTypes from 'prop-types';
import React from 'react';

const TypeFilterButtons = ({ setFilter }) => (
  <div>
    <button type="button" onClick={() => setFilter()} data-testid="filter-by-all-btn">All</button>
    <button type="button" onClick={() => setFilter('comida')} data-testid="filter-by-food-btn">
      Food
    </button>
    <button type="button" onClick={() => setFilter('bebida')} data-testid="filter-by-drink-btn">
      Drinks
    </button>
  </div>
);

TypeFilterButtons.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default TypeFilterButtons;
