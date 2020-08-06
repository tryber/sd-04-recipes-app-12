import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import './CSS/category.css'

const CardCategory = ({ handleClick, categories }) => (
  <Container>
    <Row className="category">
    <Button
      variant="primary"
      size="lg"
      data-testid="All-category-filter"
      onClick={(e) => handleClick(e.target.innerHTML)}
    >
      All
    </Button>
    {categories.map((category) => (
      <Button
      variant="primary"
      size="lg"
        key={category.strCategory}
        data-testid={`${category.strCategory}-category-filter`}
        onClick={(e) => handleClick(e.target.innerHTML)}
      >
        {category.strCategory}
      </Button>
    ))}
    </Row>
    </Container>
);

CardCategory.propTypes = {
  handleClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardCategory;
