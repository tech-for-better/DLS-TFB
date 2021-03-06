import React, { useRef, useState } from 'react';
import { FormCont, Form, Title, Input, Label, SubmitButton, BtnDisabled, TextBottom } from '../styled-components/Form';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { WarningDiv } from '../styled-components/reusables';

function AccountUpdate() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    const promises = [];

    setLoading(true);
    setError('');

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push('/account');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <FormCont>
      <Form onSubmit={handleSubmit}>
        <Title>Update</Title>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          ref={emailRef}
          defaultValue={currentUser.email}
        />
        <Label htmlFor="password">Password:</Label>        
        <Input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          minLength="7"
          placeholder="If keeping password leave this space blank"
        />
        <Label htmlFor="confirmPassword">Password Confirmation:</Label> 
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          ref={confirmPasswordRef}
          minLength="7"
          placeholder="If keeping password leave this space blank"
        />
        {error ? <WarningDiv>{error}</WarningDiv> : null}
        {!loading ? (
          <SubmitButton type="submit" value="Update" />
        ) : (
          <BtnDisabled type="submit" value="Update" disabled />
        )}
        <TextBottom>Don't wnat to update? <Link to="/account" style={{ textDecoration: 'none', color: '#79CF98' }} >Go back to Account</Link></TextBottom>
      </Form>      
    </FormCont>
  );
}

export default AccountUpdate;
