import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import './CSS/login.css';

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
  <Link to="/comidas">
    <Button
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
    </Button>
  </Link>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container className="p-3">
    <Jumbotron>
    <Row className="formLogin">
      <h1>App Receitas</h1>
    <Col xs lg="2">
      <label>E-mail</label>
      {loginInput(email, setEmail, 'email')}
      <label>Senha</label>
      {loginInput(password, setPassword, 'password')}
      {submitButton(email, password)}
    </Col>
    </Row>
    </Jumbotron>
    </Container>
  );
};

export default Login;
