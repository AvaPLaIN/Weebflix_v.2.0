//* IMPORTS
//     * REACT
import React, { useState } from 'react';

//     * COMPONENTS
import { AuthContainer } from './Auth.styled';
import LoginForm from '../../../components/forms/login-form/LoginForm';
import RegisterForm from '../../../components/forms/register-form/RegisterForm';

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES

//     * ASSETS

const Auth = () => {
  //     * INIT

  //     * STATES
  const [showSignUp, setShowSignUp] = useState(false);

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS
  const handleChangeForm = () => setShowSignUp((prev) => !prev);

  //     * EVENTS

  //     * RENDER
  return (
    <AuthContainer>
      {showSignUp ? (
        <RegisterForm showLogin={handleChangeForm} />
      ) : (
        <LoginForm showRegister={handleChangeForm} />
      )}
    </AuthContainer>
  );
};

export default Auth;
