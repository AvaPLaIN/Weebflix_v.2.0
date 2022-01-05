//* IMPORTS
//     * REACT
import React, { useEffect, lazy, Suspense } from "react";

//     * PAGES
import Auth from "./pages/authentication/auth/Auth";

//     * COMPONENTS
import { AppContainer } from "./App.styled";
import Loading from "./components/loading/Loading";

//     * REDUX / STATES
import { useSelector, useDispatch } from "react-redux";
import { user_auth } from "./redux/ducks/user";

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { Routes, Route } from "react-router-dom";

//     * ASSETS

//     * PAGES - lazy
const Home = lazy(() => import("./pages/home/Home"));
const Anime = lazy(() => import("./pages/anime/Anime"));
const RequestPassword = lazy(() =>
  import("./pages/authentication/request-password/RequestPassword")
);
const ResetPassword = lazy(() =>
  import("./pages/authentication/reset-password/ResetPassword")
);
const ValidateUser = lazy(() =>
  import("./pages/authentication/validate-user/ValidateUser")
);

//     * COMPONENTS - lazy
const Info = lazy(() => import("./components/anime/info/Info"));
const Player = lazy(() => import("./components/anime/player/Player"));
const Similar = lazy(() => import("./components/anime/similar/Similar"));

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
    <Suspense fallback={<Loading />}>
      <AppContainer>
        <Routes>
          {user?.isLoggedIn ? (
            <>
              <Route
                path="*"
                exact
                element={<Home />}
                activeClassName="active"
              />
              <Route path="anime/:id" element={<Anime />}>
                <Route path="info" element={<Info />} />
                <Route path="player" element={<Player />} />
                <Route path="similar" element={<Similar />} />
              </Route>
            </>
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
    </Suspense>
  );
}

export default App;
