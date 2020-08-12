import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import SearchBar from './SearchBar';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import { getType } from '../../functions/type';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const capitalizeURL = (URL) => {
  const phrase = URL.split(/\/|-/);
  phrase.shift();
  if (phrase.length > 2) phrase.splice(1, 1);
  return phrase.map((word) => capitalize(word === 'area' ? 'origem' : word)).join(' ');
};

const Header = ({ showButton }) => {
  const type = getType(useRouteMatch());
  const [showSearch, setShowSearch] = useState(false);
  const title = capitalizeURL(useRouteMatch().url);
  return (
    <div>
      <Link to="/perfil">
        <img data-testid="profile-top-btn" src={profileIcon} alt="profile icon" />
      </Link>
      <span data-testid="page-title">{title}</span>
      {
        showButton && (
          <button type="button" onClick={() => setShowSearch(!showSearch)}>
            <img data-testid="search-top-btn" alt="icon" src={searchIcon} />
          </button>
        )
      }
      {showSearch && <SearchBar type={type} />}
    </div>
  );
};

Header.propTypes = {
  showButton: PropTypes.bool,
};

Header.defaultProps = {
  showButton: false,
};

export default Header;
