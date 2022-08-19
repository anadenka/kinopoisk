import React from "react";
// import { Link } from 'react-router-dom'
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SideBar from "../../sideBar/SideBar";
import potter from "./img/garry.jpeg";
import "swiper/scss";
import "swiper/scss/navigation";

import "./MainPage.scss";
import { Link } from "react-router-dom";

// этот массив придет откуда-то с апишки кинопоиска и даст список фильмов
const movies = [
  {
    id: "1",
    title: "Побег из Шоушенка",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/140x210",
    year: "2008",
    genre: "Боевик",
    rating: "8.0",
    info: "2022, комедия",
  },
  {
    id: "2",
    title: "Гарри Поттер и Философский Камень",
    img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/e14da53c-afb1-443c-87ba-69c2fc00bc0a/140x210',
    year: "2001",
    genre: "Приключения",
    rating: "8.5",
    info: "какая-то инфа про кино",
  },
  {
    id: "3",
    title: "Титаник",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/140x210",
    year: "1991",
    genre: "Драма",
    rating: "10",
    info: "какая-то инфа про кино",
  },
  {
    id: "4",
    title: "Гарри Поттер и Философский Камень",
    img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/e14da53c-afb1-443c-87ba-69c2fc00bc0a/140x210',
    year: "2001",
    genre: "Приключения",
    rating: "8.5",
    info: "какая-то инфа про кино",
  },
  {
    id: "5",
    title: "Титаник",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/1bc13069-53b1-4b2a-8cac-f30c97409e88/140x210",
    year: "1991",
    genre: "Драма",
    rating: "10",
    info: "какая-то инфа про кино",
  },
  {
    id: "6",
    title: "Титаник",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/140x210",
    year: "1991",
    genre: "Драма",
    rating: "10",
    info: "какая-то инфа про кино",
  },
  {
    id: "7",
    title: "Титаник",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/140x210",
    year: "1991",
    genre: "Драма",
    rating: "10",
    info: "какая-то инфа про кино",
  },
  {
    id: "7",
    title: "Титаник",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/140x210",
    year: "1991",
    genre: "Драма",
    rating: "10",
    info: "какая-то инфа про кино",
  },
  {
    id: "7",
    title: "Титаник",
    img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/140x210",
    year: "1991",
    genre: "Драма",
    rating: "10",
    info: "какая-то инфа про кино",
  },



];

const cards = movies.map(({ id, title, year, img, genre, rating, info }) => (
  <SwiperSlide>
    <div class="col" key={id}>
      
      {/* <div className="o"> */}

        <div class="card h-100">
          <Link className="wrapImgCard" to="/">
            <img className="imgCard" src={img} class="card-img-top" alt={title} />
            <span className="imgMask"></span>
          </Link>
        </div>
          <div class="card-body">
            <div className="rating">{rating}</div>

            <div className="wrapperTicket">
              <Link className="ticket" to='/'>
                <div className="tttе">
                  {/* <p>Купить билет</p> */}
                </div>
                <button className="buttTicket">
                  <i class="fa-solid fa-ticket-simple ticketIcon"></i>
                </button>
                <div className="ttt"></div>
              </Link>
            </div>
            
            
            <Link className="linkToFilm" to='/'>
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{year}, {genre}</p>
            </Link>
          </div>

      {/* </div> */}
      
    </div>
  </SwiperSlide>
));

function MainPage() {
  return (
    <div className="main-page">
      <div className="d-flex flex-column sideBlock">
        <SideBar />
      </div>

      <div className="mainContent">
        <div className="filmsContainer">
          <div className="poster">
            <img alt="Garry Potter" className="imgPoster" src={potter}></img>
          </div>

          <div className="cards">
            <div className="title">
              <a href="/" className="wrapTitle">
                Билеты в кино
                <i class="fa-solid fa-angle-right arrowIcon" />
              </a>
            </div>
            <Swiper
              className="swiperCss"
              modules={[Navigation]}
              spaceBetween={18}
              navigation
              slidesPerView={6}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              {cards}
            </Swiper>
          </div>
        </div>
        
        <section className="blackBlockSubscription">
          <img className="bg" alt="" src="https://yastatic.net/s3/kinopoisk-frontend/frontend-www/release/_next/static/images/cover-retina-cd8a143555560995fbd3dc7f1a123172.png"></img>
        </section>
      </div>
        

    </div>
  );
}

export default MainPage;
