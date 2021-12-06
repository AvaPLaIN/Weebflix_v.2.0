//* IMPORTS
//     * REACT
import React, { useState } from 'react';

//     * COMPONENTS
import { LoginFormComponent } from './LoginForm.styled';
import Loading from '../../loading/Loading';

//     * REDUX / STATES
import { useDispatch, useSelector } from 'react-redux';
import { user_login } from '../../../redux/ducks/user';

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faUnlockAlt,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

//     * ASSETS

const LoginForm = ({ showRegister }) => {
  //     * INIT
  const dispatch = useDispatch();

  //     * STATES
  const user = useSelector((state) => state.user);
  //          ! FORM STATES
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS
  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(user_login({ email, password }));

    resetForm();
  };

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  //     * EVENTS
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  //     * RENDER
  return (
    <LoginFormComponent>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-data">
          <div className="container">
            <label htmlFor="email">Email</label>

            <div className="input-container">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <input
                type="text"
                id="email"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
                title="email must be a valid email"
              />
            </div>
          </div>

          <div className="container">
            <label htmlFor="password">Password</label>

            <div className="input-container">
              <FontAwesomeIcon className="icon" icon={faUnlockAlt} />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$"
                title="password must be 8-30 chars long and must contain Uppercase, Lowercase, Symbol, Number"
              />
              <FontAwesomeIcon
                onClick={handleToggleShowPassword}
                className="icon show-password"
                icon={showPassword ? faEyeSlash : faEye}
              />
            </div>
          </div>
        </div>

        <Link to="/resetPassword">Forgot password?</Link>

        <button type="submit" disabled={user.loading}>
          {user.loading ? <Loading /> : 'Login'}
        </button>

        <p className="server-error">{user.error}</p>
        <p className="server-message">{user.message}</p>
      </form>

      <div className="social-media-signup">
        <p>Or Sign In Using</p>

        <div className="social-medias">
          <div className="facebook">
            <FontAwesomeIcon className="icon" icon={faFacebookF} />
          </div>

          <div className="twitter">
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </div>

          <div className="google">
            <FontAwesomeIcon className="icon" icon={faGoogle} />
          </div>
        </div>
      </div>

      <div className="sign-up">
        <p onClick={showRegister}>Sign Up</p>
      </div>
    </LoginFormComponent>
  );
};

export default LoginForm;
