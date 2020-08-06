import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const capitalizePhrase = (phrase) => phrase.map((word) => capitalize(word)).join(' ');

const Header = ({ type }) => {
  const [showSearch, setShowSearch] = useState(false);
  const title = capitalizePhrase(useHistory().location.pathname.split('/')[1].split('-'));
  return (
    <div>
      <Link to="/perfil">
        <img data-testid="profile-top-btn" src={profileIcon} alt="profile icon" />
      </Link>
      <span data-testid="page-title">{title}</span>
      {
        type && (
          <button type="button" onClick={() => setShowSearch(!showSearch)}>
            <img data-testid="search-top-btn" src={searchIcon} alt="search icon" />
          </button>
        )
      }
      {showSearch && <SearchBar type={type} />}
    </div>
  );
};

Header.propTypes = {
  type: PropTypes.string,
};

Header.defaultProps = {
  type: null,
};

export default Header;
