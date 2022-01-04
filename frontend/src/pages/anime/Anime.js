//* IMPORTS
//     * REACT
import { useState, useEffect } from "react";

//     * COMPONENTS
import Navbar from "../../components/navbar/Navbar";
import { AnimeContainer } from "./Anime.styled";
import Menu from "../../components/anime/menu/Menu";
import Loading from "../../components/loading/Loading";

//     * REDUX / STATES
import { useSelector } from "react-redux";

//     * SERVICES
import { getAnimeById } from "../../services/anime";

//     * UTILS

//     * HOOKS

//     * EXTERN LIBRARIES
import { useParams, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

//     * ASSETS

const Anime = () => {
  //     * INIT
  const { id } = useParams();

  //     * STATES
  //     ! REDUX
  const accessToken = useSelector((state) => state?.user?.user?.accessToken);
  //     ! STATE
  const [anime, setAnime] = useState({});

  //     * REFS

  //     * USE-EFFECT
  useEffect(() => {
    const fetchAnimeById = async () => {
      const data = await getAnimeById(accessToken, id);
      if (data.success) {
        setAnime(data?.data);
      }
    };

    fetchAnimeById();
  }, [accessToken, id]);

  //     * HANDLERS

  //     * EVENTS

  //     * RENDER
  return (
    <AnimeContainer>
      <Navbar />
      <div className="anime-container">
        <div className="banner-container">
          <img src={anime?.banner} alt="" />
        </div>
        <div className="anime-header">
          <div className="thumnail-container">
            <img src={anime?.thumnail} alt="" />
          </div>
          <div className="title-container">
            <Menu />
            <h1 className="title">{anime?.title}</h1>
            <div className="genres info">
              <p className="option">Genres: </p>
              {anime?.genres?.map((genre) => (
                <p key={genre}>{genre}</p>
              ))}
            </div>
            <div className="released info">
              <p className="option">Released</p>
              <p>{anime?.released}</p>
            </div>
            <div className="status info">
              <p className="option">Status</p>
              <p>{anime?.status}</p>
            </div>
          </div>
        </div>
      </div>
      <Outlet context={anime} />
    </AnimeContainer>
  );
};

export default Anime;
