import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./style/style.scss";
import "./index.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnlineCinema from "./components/pages/onlineCinema/OnlineCinema";
import Media from "./components/pages/media/Media";
import Movies from "./components/pages/movies/Movies";
import Serials from "./components/pages/serials/Serials";
import MovieTickets from "./components/pages/movieTickets/MovieTickets";
import AppHeader from "./components/appHeader/AppHeader";
import SideBar from "./components/sideBar/SideBar";
import AppBanner from "./components/appBanner/AppBanner";
import AppFooter from "./components/appFooter/AppFooter";
import SetToTV from "./components/pages/setToTV/SetToTV";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppHeader />
      <AppBanner />
      <div className="wrapper">
        <div className="container">
          <div className="mainContainer">
            <SideBar />
            <Routes>
              <Route exact path='/' element={<App />} />
              <Route exact path='/cinema' element={<OnlineCinema />} />
              <Route exact path='/movies' element={<Movies />} />
              <Route exact path='/serials' element={<Serials />} />
              <Route exact path='/tickets' element={<MovieTickets />} />
              <Route exact path='/media' element={<Media />} />
              <Route exact path='/setToTV' element={<SetToTV />} />
            </Routes>
          </div>
          <AppFooter />
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);
