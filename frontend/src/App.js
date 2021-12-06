//* IMPORTS
//     * REACT
import React, { useEffect } from 'react';

//     * PAGES
import Home from './pages/home/Home';
import Auth from './pages/authentication/auth/Auth';
import RequestPassword from './pages/authentication/request-password/RequestPassword';
import ResetPassword from './pages/authentication/reset-password/ResetPassword';
import ValidateUser from './pages/authentication/validate-user/ValidateUser';

//     * COMPONENTS
import { AppContainer } from './App.styled';

//     * REDUX / STATES
import { useSelector, useDispatch } from 'react-redux';
import { user_auth } from './redux/ducks/user';

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { Routes, Route } from 'react-router-dom';

//     * ASSETS

function App() {
  //     * INIT
  const dispatch = useDispatch();

  //     * STATES
  const user = useSelector((state) => state?.user);

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    if (user?.user) dispatch(user_auth(user?.user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER
  return (
    <AppContainer>
      <Routes>
        {user?.isLoggedIn ? (
          <Route path="*" exact element={<Home />} />
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="/resetPassword" element={<RequestPassword />} />
            <Route path="/resetPassword/:token" element={<ResetPassword />} />
            <Route path="/validate/:token" element={<ValidateUser />} />
            <Route path="*" element={<Auth />} />
          </>
        )}
      </Routes>
    </AppContainer>
  );
}

export default App;
