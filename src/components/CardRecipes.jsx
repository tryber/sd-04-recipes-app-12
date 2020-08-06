import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useRecipes } from '../contexts/RecipesContext';

const CardRecipes = ({ type }) => {
  const { recipes, loading } = useRecipes();
  return !loading ? (
    recipes.map((recipe, index) => (
      <Container>
        <Row className="">
          <Col></Col>
          <Col>
            <Card key={recipe.id} data-testid={`${index}-recipe-card`} style={{ width: '30rem' }}>
              <Card.Img variant="top" src={recipe.image} alt="imagem" data-testid={`${index}-card-img`} />
              <Card.Body>
                <Card.Title data-testid={`${index}-card-name`}>{recipe.name}</Card.Title>
                <Link to={`${type === 'meal' ? '/comidas/' : '/bebidas/'}${recipe.id}`}>
                  <Button variant="primary">Ver receita</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    ))
  ) : <p>loading...</p>;
};

CardRecipes.propTypes = {
  type: PropTypes.string.isRequired,
};

export default withRouter(CardRecipes);
