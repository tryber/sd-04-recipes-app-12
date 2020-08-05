import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import { getType } from '../../functions/type';

const Header = () => {
  const type = getType(useRouteMatch());
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <Link to="/perfil">
        <img data-testid="profile-top-btn" src={profileIcon} alt="profile icon" />
      </Link>
      <span data-testid="page-title">{type === 'meal' ? 'Comidas' : 'Bebidas'}</span>
      <button type="button" onClick={() => setShowSearch(!showSearch)}>
        <img data-testid="search-top-btn" src={searchIcon} alt="search icon" />
      </button>
      {showSearch && <SearchBar type={type} />}
    </div>
  );
};

Header.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Header;
