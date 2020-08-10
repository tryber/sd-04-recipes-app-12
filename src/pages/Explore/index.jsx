import React from 'react';
import { Link, useParams } from 'react-router-dom';

const getExplorer = () => (
  <div>
    <Link to="/explorar/comidas">
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Explorar Comidas
      </button>
    </Link>
    <Link to="/explorar/bebidas">
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Explorar Bebidas
      </button>
    </Link>
  </div>
);

const explorerByTypes = (type) => {
  const component = (
    <div>
      <Link to="/explorar/comidas">
        <button
          type="button"
          data-testid="finish-recipe-btn"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button
          type="button"
          data-testid="finish-recipe-btn"
        >
          Me Surpreenda!
        </button>
      </Link>
    </div>
  );
  return type === 'comidas' ? (
    <div>
      {component}
      <Link to="/explorar/comidas">
        <button
          type="button"
          data-testid="finish-recipe-btn"
        >
          Me Surpreenda!
        </button>
      </Link>
    </div>
  ) : (
    component
  );
};

export default function Explore() {
  const { type, by } = useParams();

  function validateStatus() {
    if ((type === 'comidas' || 'bebidas') && (by === 'ingredientes' || 'area')) {
      return explorerByTypes(type);
    }
    if ((type === 'comidas' || 'bebidas')) {
      return explorerByTypes(type);
    }
    return getExplorer();
  }

  return validateStatus();
}
