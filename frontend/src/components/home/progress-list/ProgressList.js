// //* IMPORTS
// //     * REACT
// import { useEffect } from "react";

// //     * COMPONENTS
// import { ProgressListContainer } from "./ProgressList.styled";
// import ProgressItem from "../progress-item/ProgressItem";
// import ProgressLoadingList from "./ProgressLoadingList";

// //     * REDUX / STATES
// import { useSelector, useDispatch } from "react-redux";
// import { fetch_progress_anime_list } from "../../../redux/ducks/anime";

// //     * SERVICES

// //     * UTILS

// //     * HOOKS
// import useSlider from "../../../hooks/useSlider";

// //     * EXTERN LIBRARIES
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";

// //     * ASSETS

// const ProgressList = () => {
//   //     * INIT
//   const dispatch = useDispatch();

//   //     * STATES
//   //          ! REDUX
//   const accessToken = useSelector((state) => state?.user?.user?.accessToken);
//   const progressList = useSelector((state) => state?.anime?.progressList);
//   const loading = useSelector((state) => state?.anime?.loading);
//   //          ! STATE

//   //     * REFS

//   //     * USE-EFFECT
//   useEffect(() => {
//     dispatch(fetch_progress_anime_list(accessToken));
//   }, [dispatch, accessToken]);

//   //     * CUSTOM HOOKS
//   const [isListScrolled, listRef, moveSlider] = useSlider();

//   //     * HANDLERS

//   //     * EVENTS

//   //     * RENDER

//   return (
//     <>
//       {progressList && (
//         <ProgressListContainer>
//           <h1 className="list-header">last seen</h1>
//           <div className="progress-list-container">
//             {isListScrolled && (
//               <FontAwesomeIcon
//                 onClick={() => moveSlider("right")}
//                 className="sliderArrow left"
//                 icon={faChevronLeft}
//               />
//             )}
//             {loading ? (
//               <ProgressLoadingList />
//             ) : (
//               <div ref={listRef} className="progress-list">
//                 {progressList?.map((progressAnime) => (
//                   <ProgressItem key={progressAnime._id} anime={progressAnime} />
//                 ))}
//               </div>
//             )}
//             <FontAwesomeIcon
//               onClick={() => moveSlider("left")}
//               className="sliderArrow right"
//               icon={faChevronRight}
//             />
//           </div>
//         </ProgressListContainer>
//       )}
//     </>
//   );
// };

// export default ProgressList;
