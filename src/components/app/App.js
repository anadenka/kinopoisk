import React from "react";
import MainPage from "../pages/mainPage/MainPage";
import AppHeader from '../appHeader/AppHeader';
import "./App.scss"
import AppBanner from "../appBanner/AppBanner";


function App() {
  return (
    <React.StrictMode>
      <div className="wrapper">
        <AppHeader />
        <div className="container">
          <div className="mainContainer">
            <AppBanner />
            <MainPage />
          </div>
        </div>
      </div>

    </React.StrictMode>
  )
}

export default App;
