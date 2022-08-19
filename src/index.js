import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./style/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/mainPage/MainPage";
import OnlineCinema from "./components/pages/onlineCinema/OnlineCinema";
import Media from "./components/pages/media/Media";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
      <Routes>
        <Route exact path='/main' element={<MainPage />} />
        <Route exact path='/cinema' element={<OnlineCinema />} />
        <Route exact path='/media' element={<Media />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
