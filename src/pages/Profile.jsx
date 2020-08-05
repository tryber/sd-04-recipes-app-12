import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';

const Profile = () => {
  const { email } = JSON.parse(localStorage.user);
  const history = useHistory();
  const leave = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header />
      <h3 data-testid="profile-email">{email}</h3>
      <Link to="/receitas-feitas" data-testid="profile-done-btn">Receitas Feitas</Link>
      <Link to="/receitas-favoritas" data-testid="profile-favorite-btn">Receitas Favoritas</Link>
      <button type="button" onClick={leave} data-testid="profile-logout-btn">Sair</button>
      <BottomMenu />
    </div>
  );
};
export default Profile;
