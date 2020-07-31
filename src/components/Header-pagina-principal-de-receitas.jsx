import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <Link to="">
    <button data-testid="profile-top-btn"><img src="../images/profileIcon.svg" alt="profile icon"/></button>
    </Link>
    <h1 data-testid="page-title"></h1>
    <Link to="">
    <button data-testid="search-top-btn"><img src="../images/searchIcon.svg" alt="search icon"/></button>
    </Link>
  </div>
);

export default Header;
