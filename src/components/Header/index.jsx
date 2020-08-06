import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import SearchBar from './SearchBar';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

const Header = ({ type }) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Container>
      <Jumbotron>
        <Link to="/perfil" data-testid="profile-top-btn">
          <img src={profileIcon} alt="profile icon" />
        </Link>
        <span data-testid="page-title">{type}</span>
        <button data-testid="search-top-btn" type="button" onClick={() => setShowSearch(!showSearch)}>
          <img src={searchIcon} alt="search icon" />
        </button>
      {showSearch && <SearchBar type={type} />}
      </Jumbotron>
    </Container>
  );
};

Header.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Header;

