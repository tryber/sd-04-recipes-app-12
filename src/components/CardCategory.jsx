import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const CardCategory = ({ handleClick, categories }) => (
  <div>
    <Button
      type="button"
      data-testid="All-category-filter"
      onClick={(e) => handleClick(e.target.innerHTML)}
    >
      All
    </Button>
    {categories.map((category) => (
      <Button
        key={category.strCategory}
        data-testid={`${category.strCategory}-category-filter`}
        type="button"
        onClick={(e) => handleClick(e.target.innerHTML)}
      >
        {category.strCategory}
      </Button>
    ))}
  </div>
);

CardCategory.propTypes = {
  handleClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardCategory;
