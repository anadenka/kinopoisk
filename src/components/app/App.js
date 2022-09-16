import React from "react";
import MainPage from "../pages/mainPage/MainPage";
import AppHeader from '../appHeader/AppHeader';
import "./App.scss"
import AppBanner from "../appBanner/AppBanner";
import SideBar from "../sideBar/SideBar";
import AppFooter from "../appFooter/AppFooter";


function App() {
  return (
    <React.StrictMode>
      <div className="wrapper">
        <AppHeader />
        <div className="container">
          <AppBanner />
          <div className="mainContainer">
            <SideBar />
            <MainPage />
          </div>
            <AppFooter/>
        </div>
      </div>

    </React.StrictMode>
  )
}

export default App;
