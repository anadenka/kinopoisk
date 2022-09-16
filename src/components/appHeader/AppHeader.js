import React from "react";
import { Link } from "react-router-dom";
import "./appHeader.scss";
import LinkItem from "./LinkItem";

const linkItems = [
  {
    id: 1,
    text: "Онлайн-кинотеатр",
    icon: "fa-solid fa-play",
    href: "/cinema",
  },
  {
    id: 2,
    text: "Установить на ТВ",
    icon: "fa-solid fa-display",
    href: "/TV",
  },
];

function AppHeader() {
  return (
    <div className="appHeader">
      <div className="containerHeader">
        <div className="inner">
          <Link className="link linkKino" to="/">
            <img
              alt="Кинопоиск"
              src="https://avatars.mds.yandex.net/get-bunker/60661/ca8f75cb24f8c1cf575ed0b11f14ed53e3138470/orig"
            />
          </Link>

          {linkItems.map((itemProps) => (
            <LinkItem key={itemProps.id} {...itemProps} />
          ))}

          <div className="input">
            <input
              className="inputCinema"
              type="text"
              placeholder="Фильмы, сериалы, персоны "
            ></input>
            <button type="submite" className="buttonSearch">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <div className="tryPluse">
            <Link className="link pluse" to="/cinema">
              Попробовать Плюс
            </Link>
          </div>

          <div className="ent">
            <button className="enter">Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
