import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './../contexts/AuthContext';
import { collectionCall } from './../utils/dataHelpers';
import { db } from './../database/firebase';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import {
  Button,
  MainCont,
  AccCard,
  Img,
} from './../styled-components/reusables';

import accountImg from './../images/account-img.svg';
import AccountBox from './../components/accountBox';

function AccountPage() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const [data, setData] = useState();

  const collectionArr = [];
  const docRef = db.collection('users').doc(`${currentUser.uid}`);

  console.log(currentUser.uid);

  useEffect(() => collectionCall(docRef, collectionArr, setData), 
  // eslint-disable-next-line
  []);

  console.log(data);

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/');
    } catch {}
  }
  return (
    <MainCont width="100vw" align="center">
      <MainCont margin=" 4rem 0" mgntop="7rem">
        <Img
          src={accountImg}
          alt="illustration of a community of people"
          width="55vw"
        />
        <AccCard padding="1rem" border="#b0c5f8 solid 3px" width="25vw">
          <AccountBox
            nameInput={data ? data[0].userName : ''}
            emailInput={
              currentUser ? currentUser.email : <p>No user signed in:</p>
            }
            scoreInput={data ? data[0].score : ''}
          ></AccountBox>
          {error ? alert(error) : null}
          <Link to="account-update">
            <Button
              background="#b0c5f8"
              border="#b0c5f8 solid 3px"
              padding="0.5rem 0.35rem"
              margin="0.5rem"
            >
              Update Profile
            </Button>
          </Link>
          <Button
            background="#b0c5f8"
            border="#b0c5f8 solid 3px"
            onClick={handleLogout}
            padding="0.5rem 0.35rem"
            margin="0.5rem"
          >
            LOGOUT
          </Button>
        </AccCard>
      </MainCont>
      <Footer />
    </MainCont>
  );
}

export default AccountPage;
