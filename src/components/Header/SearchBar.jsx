import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { searchBy } from '../../services/recipesAPI';
import { useRecipes } from '../../contexts/RecipesContext';

const radios = [
  // pra ajudar no CC
  ['ingredient', 'Ingrediente'],
  ['name', 'Nome'],
  ['first-letter', 'Primeira letra'],
];

const radioInput = ([value, text], onChange) => (
  <label htmlFor={value} key={value + text}>
    <input
      type="radio"
      data-testid={`${value}-search-radio`}
      id={value}
      name="radioSearch"
      value={value}
      onChange={onChange}
      required
    />
    {text}
  </label>
);

const validate = async (radioSearch, search, type, setRecipes, history) => {
  const recipes = await searchBy(radioSearch, search, type);
  if (recipes.length > 1) setRecipes(recipes);
  else if (recipes.length === 0) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  } else {
    const path = type === 'meal' ? 'comidas' : 'bebidas';
    history.push(`/${path}/${recipes[0].id}`);
  }
};

const SearchBar = ({ type }) => {
  const [state, setState] = useState({});
  const { setRecipes } = useRecipes();
  const { radioSearch, search } = state;
  const history = useHistory();

  const onChange = ({ target: { value, name } }) => setState({ ...state, [name]: value });

  const onSubmit = (e) => {
    e.preventDefault();
    return radioSearch === 'first-letter' && search.length > 1
      ? alert('Sua busca deve conter somente 1 (um) caracter')
      : validate(radioSearch, search, type, setRecipes, history);
  };
  return (
    <form onSubmit={onSubmit}>
      <input data-testid="search-input" name="search" required onChange={onChange} />
      {radios.map((r) => radioInput(r, onChange))}
      <button data-testid="exec-search-btn" type="submit">
        Buscar
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SearchBar;
