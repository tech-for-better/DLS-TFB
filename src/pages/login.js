import React, { useRef, useState } from 'react';
import { FormCont, Form, Title, Input, Label, SubmitButton, BtnDisabled, Text, TextBottom } from '../styled-components/Form';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {WarningDiv} from '../styled-components/reusables';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  //calling and intializing useAuth() to use the signup function to create new users and call
  //the unsubsribe function in the useffect()
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/account');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
    
  }
  return (
    <FormCont>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Label htmlFor="email">Email:</Label>        
        <Input type="email" id="email" name="email" ref={emailRef} required />
        <Label htmlFor="password">Password:</Label>        
        <Input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          minLength="7"
          required
        />
        <Text>
          <Link to="/forgot-password" style={{ textDecoration: 'none', color: 'black' }} >Forgot Password?</Link>
        </Text>
        {error ? <WarningDiv>{error}</WarningDiv> : null}
        {!loading ? (
          <SubmitButton type="submit" value="Log in"/>
        ) : (
          <BtnDisabled type="submit" value="Log in" disabled />
        )}
        <TextBottom>Don't have an account? <Link to="/signup" style={{ textDecoration: 'none', color: '#79CF98' }}>SignUp</Link></TextBottom>
      </Form>           
    </FormCont>
  );
}

export default Login;
