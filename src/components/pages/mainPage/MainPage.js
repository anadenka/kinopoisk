import React, { useEffect, useState } from "react";
import poster from "./img/poster.jpeg";

import "./MainPage.scss";
import { getFilteredFilms } from "../../../utils/request";
import Cards from "../../cards/Cards";


function MainPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getFilteredFilms({}).then(({data}) => setMovies(data?.films))
  }, [])

  return (
    <div className="main-page">
      <div className="mainContent">
        <div className="filmsContainer">
          <div className="poster">
            <img alt="Poster" className="imgPoster" src={poster}></img>
          </div>
          <div className="cards">
            <div className="title">
              <a href="/" className="wrapTitle">
                Топ ожидаемых фильмов
                <i className="fa-solid fa-angle-right arrowIcon" />
              </a>
            </div>
            <div className="wrapSwip">
              <Cards movies={movies}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
