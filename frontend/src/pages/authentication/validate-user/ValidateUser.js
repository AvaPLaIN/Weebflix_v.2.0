//* IMPORTS
//     * REACT
import React, { useEffect } from 'react';

//     * COMPONENTS
import { ValidateUserComponent } from './ValidateUser.styled';
import Loading from '../../../components/loading/Loading';

//     * REDUX / STATES
import { useDispatch, useSelector } from 'react-redux';
import { user_validate } from '../../../redux/ducks/user';

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

//     * ASSETS

const ValidateUser = () => {
  //     * INIT
  const dispatch = useDispatch();
  const params = useParams();

  //     * STATES
  const user = useSelector((state) => state.user);

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    const token = params.token;
    dispatch(user_validate(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER
  return (
    <ValidateUserComponent>
      {user.loading ? (
        <Loading />
      ) : (
        (user.message || user.error) && <Navigate to="/" />
      )}
    </ValidateUserComponent>
  );
};

export default ValidateUser;
