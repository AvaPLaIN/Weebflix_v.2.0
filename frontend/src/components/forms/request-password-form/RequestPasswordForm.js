//* IMPORTS
//     * REACT
import { useState, useCallback } from "react";

//     * COMPONENTS
import { RequestPasswordFormComponent } from "./RequestPasswordForm.styled";
import Loading from "../../loading/Loading";

//     * REDUX / STATES
import { useDispatch, useSelector } from "react-redux";
import { user_request_password } from "../../../redux/ducks/user";

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//     * ASSETS

const RequestPasswordForm = () => {
  //     * INIT
  const dispatch = useDispatch();

  //     * STATES
  const user = useSelector((state) => state.user);
  //          ! FORM STATES
  const [email, setEmail] = useState("");

  //     * REFS

  //     * USE-EFFECT

  //     * EVENTS
  const resetForm = useCallback(() => {
    setEmail("");
  }, []);

  //     * HANDLERS
  const handleRequestPassword = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(user_request_password(email));

      resetForm();
    },
    [dispatch, email, resetForm]
  );

  //     * RENDER
  return (
    <RequestPasswordFormComponent>
      <h1>Request new Password</h1>
      <form onSubmit={handleRequestPassword}>
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
        </div>

        <button type="submit" disabled={user.loading}>
          {user.loading ? <Loading /> : "Request new password"}
        </button>

        <p className="server-error">{user.error}</p>
        <p className="server-message">{user.message}</p>
      </form>

      <div className="sign-up">
        <Link to="/">Sign In</Link>
      </div>
    </RequestPasswordFormComponent>
  );
};

export default RequestPasswordForm;
