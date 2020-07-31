import { Link } from 'react-router-dom';
import React, { useState } from 'react';

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
  <Link to="/">
    <button
      type="button"
      disabled={!(checkEmail(email) && checkPassword(password))}
      data-testid="login-submit-btn"
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
    <div>
      {loginInput(email, setEmail, 'email')}
      {loginInput(password, setPassword, 'password')}
      {submitButton(email, password)}
    </div>
  );
};

export default Login;
