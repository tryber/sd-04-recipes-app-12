import React from 'react';

const TypeFilterButtons = ({ setFilter }) => (
  <div>
    <button type="button" onClick={() => setFilter()}>All</button>
    <button type="button" onClick={() => setFilter('meal')}>Food</button>
    <button type="button" onClick={() => setFilter('cocktail')}>Drinks</button>
  </div>
);

export default TypeFilterButtons;
