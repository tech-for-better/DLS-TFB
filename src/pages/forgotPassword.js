import React, { useRef, useState } from 'react';
import { FormCont, Form, Title, Input, Label, SubmitButton, BtnDisabled, TextBottom } from '../styled-components/Form';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {WarningDiv} from '../styled-components/reusables';

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for futher instructions');
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }
  return (
    <FormCont>
      <Form onSubmit={handleSubmit}>
        <Title>Password Reset</Title>
        <Label htmlFor="email">Email:</Label>        
        <Input type="email" id="email" name="email" ref={emailRef} required/>
        {error ? <WarningDiv>{error}</WarningDiv> : null}
        {!loading ? (
          <SubmitButton type="submit" value="Reset Password" />
        ) : (
          <BtnDisabled type="submit" value="Reset Password" disabled />
        )}
        <TextBottom>No account? <Link to="/signup" style={{ textDecoration: 'none', color: '#79CF98' }} >signup here</Link></TextBottom>
        <TextBottom>Log In? <Link to="/login" style={{ textDecoration: 'none', color: '#79CF98' }} >Log In here</Link></TextBottom>     
        
      </Form>
      {message ? alert(message) : null}
    </FormCont>
  );
}

export default ForgotPassword;
