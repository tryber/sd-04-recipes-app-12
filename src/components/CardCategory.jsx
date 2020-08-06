import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import './CSS/category.css'

const CardCategory = ({ handleClick, categories }) => (
  <Container>
    <Row className="category">
    <button
      type="button"
      data-testid="All-category-filter"
      onClick={(e) => handleClick(e.target.innerHTML)}
    >
      All
    </button>
    {categories.map((category) => (
      <button
        key={category.strCategory}
        data-testid={`${category.strCategory}-category-filter`}
        type="button"
        onClick={(e) => handleClick(e.target.innerHTML)}
      >
        {category.strCategory}
      </button>
    ))}
    </Row>
    </Container>
);

CardCategory.propTypes = {
  handleClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardCategory;
