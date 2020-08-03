import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <Link to="/perfil">
    <button data-testid="profile-top-btn"><img src="../images/profileIcon.svg" alt="profile icon"/></button>
    </Link>
    <h1 data-testid="page-title"></h1>
    <button data-testid="search-top-btn"><img src="../images/searchIcon.svg" alt="search icon"/></button>
  </div>
);

export default Header;
