import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import '../components/CSS/Categories.css';

const CardCategory = ({ handleClick, categories }) => (
  <div>
    <Button
      block
      size="sm"
      className="button"
      type="button"
      data-testid="All-category-filter"
      onClick={(e) => handleClick(e.target.innerHTML)}
    >
      All
    </Button>
    {categories.map((category) => (
      <Button
        block
        size="sm"
        className="button"
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
