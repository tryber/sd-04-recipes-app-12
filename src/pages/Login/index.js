import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './index.css';


const checkEmail = (email) => email.match(/\S+@\S+\.\S+/i);

const checkPassword = (password) => password.length > 6;

const loginInput = (state, handleChange, type) => (
  <input
    type={type}
    value={state}
    data-testid={`${type}-input`}
    onChange={({ target: { value } }) => handleChange(value)}
    id={type}
  />
);

const saveTokens = () => {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
};

const saveEmail = (email) => localStorage.setItem('user', JSON.stringify({ email }));

const submitButton = (email, password) => (
  <Link
    to={{
      pathname: '/comidas',
      state: {
        datatest: 'recipe',
        qtd: 12,
        by: 'name',
        info: '',
      },
    }}
  >
    <button
      type="button"
      disabled={!(checkEmail(email) && checkPassword(password))}
      data-testid="login-submit-btn"
      className="login-submit-btn"
      onClick={() => {
        saveTokens();
        saveEmail(email);
      }}
    >
      Entrar
    </button>
  </Link>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Jumbotron>
        <div className="login">
          <h1>App Receitas</h1>
          <label>E-mail:</label>
          {loginInput(email, setEmail, 'email')}
          <label>Password:</label>
          {loginInput(password, setPassword, 'password')}
          {submitButton(email, password)}
        </div>
      </Jumbotron>
    </Container>
  );
};

export default Login;
