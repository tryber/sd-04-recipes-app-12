import React from 'react';

const SearchBar = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input data-testid="search-input" placeholder="Search" required />
      <label htmlFor="ingredient">
        Ingrediente
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient"
          name="radioSearch"
        />
      </label>
      <label htmlFor="name">
        Nome
        <input type="radio" data-testid="name-search-radio" id="name" name="radioSearch" />
      </label>
      <label htmlFor="first-letter">
        Primeira letra
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter"
          name="radioSearch"
        />
      </label>
      <button data-testid="exec-search-btn" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
