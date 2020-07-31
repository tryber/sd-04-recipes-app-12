import React from 'react';
import PropTypes from 'prop-types';

const CardCategory = ({ handleClick, categories }) => (
  <div>
    <button
      type="button"
      data-testid="All-category-filter"
      onClick={(e) => handleClick(e.target.innerHTML)}
    >
      All
    </button>
    {categories.map((category) => (
      <button
        data-testid={`${category.strCategory}-category-filter`}
        type="button"
        onClick={(e) => handleClick(e.target.innerHTML)}
      >
        {category.strCategory}
      </button>
    ))}
  </div>
);

CardCategory.propTypes = {
  handleClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardCategory;
