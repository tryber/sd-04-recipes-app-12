import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ type }) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <Link to="/perfil" data-testid="profile-top-btn">
        <img src="../images/profileIcon.svg" alt="profile icon" />
      </Link>
      <h1 data-testid="page-title">{type}</h1>
      <button data-testid="search-top-btn" type="button" onClick={() => setShowSearch(!showSearch)}>
        <img src="../images/searchIcon.svg" alt="search icon" />
      </button>
      {showSearch && <SearchBar type={type} />}
    </div>
  );
};

Header.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Header;
