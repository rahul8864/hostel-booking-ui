import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { Container, Card } from 'react-bootstrap'
import NavBar from './NavBar';
import Second from './second'
import Third from './third'
import Fourth from './fourth'
import Fifth from './fifth'

const config = {
    apiKey: "AIzaSyBZFH3Fih1zJGjCCmoxNumjtYcCaDvRFFg",
    authDomain: "react-login-2cd54.firebaseapp.com",
  // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};


export default function Login() {
    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
          setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
      }, []);
      if (!isSignedIn) {
  return (
    <>
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'90vh'}}>
       <div className='w-100' style={{maxWidth:'300px'}}>
       <Card>
        <Card.Body>
          <h3 className="text-center bold">Hostel Allocation</h3>
          <p className="text-center bold">Please Sign-In:</p>
          <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
          </Card.Body>
          </Card>
       </div>
       </Container>
    </>
  )
      }
      return (
        <>
        <Second />
        <Third />
          <Fourth />
          <Fifth />
          <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </>
      );
}
