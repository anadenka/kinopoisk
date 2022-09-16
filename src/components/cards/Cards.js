import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import "./Cards.styles.scss";
import "swiper/scss";
import "swiper/scss/navigation";

function Cards({ movies }) {
  return (
    <Swiper
      className="swiperCss"
      modules={[Navigation]}
      spaceBetween={18}
      navigation
      slidesPerView={5}
    >
      {movies.map(({ filmId, nameRu, year, posterUrlPreview, genres, rating, info }) => (
        <SwiperSlide key={filmId}>
          <div className="col">
            <div className="card h-100">
              <Link to="">
                <div className="wrapImg">
                  <img src={posterUrlPreview} className="card-img-top imgCard" alt={nameRu} />
                  <span className="imgMask"></span>
                </div>
              </Link>
            </div>
            <div className="card-body">
              <div className="rating">{rating}</div>

              <a href="/" className="wrapperTicket">
                <Link className="ticket" to="">
                  <i className="fa-solid fa-ticket-simple ticketIcon"></i>
                </Link>

                <div className="ticketPurchase">
                  <p>Купить билет</p>
                </div>
              </a>

              <Link className="linkToFilm" to="">
                <h5 className="card-title">{nameRu}</h5>
                <p className="card-text">
                  {year}, {genres.map(({genre}) => `${genre} `)}
                </p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Cards;
