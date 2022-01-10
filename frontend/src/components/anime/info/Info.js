//* IMPORTS
//     * REACT

//     * COMPONENTS
import { InfoContainer } from "./Info.styled";

//     * REDUX / STATES

//     * SERVICES

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { useOutletContext } from "react-router-dom";

//     * ASSETS

const Info = () => {
  //     * INIT
  const { anime } = useOutletContext();

  //     * STATES
  //     ! REDUX
  //     ! STATE

  //     * REFS

  //     * USE-EFFECT

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER
  return (
    <InfoContainer>
      <div className="description-container">
        <p>{anime?.description}</p>
      </div>
      <div className="trailer-container">
        <iframe
          src={anime?.trailer}
          frameborder="0"
          title="trailer"
          allowFullScreen={true}
        ></iframe>
      </div>
    </InfoContainer>
  );
};

export default Info;
