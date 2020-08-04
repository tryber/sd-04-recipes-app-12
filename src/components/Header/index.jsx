import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

const Header = ({ type }) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      <Link to="/perfil" data-testid="profile-top-btn">
        <img src={profileIcon} alt="profile icon" />
      </Link>
      <span data-testid="page-title">{type}</span>
      <button data-testid="search-top-btn" type="button" onClick={() => setShowSearch(!showSearch)}>
        <img src={searchIcon} alt="search icon" />
      </button>
      {showSearch && <SearchBar type={type} />}
    </div>
  );
};

Header.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Header;
