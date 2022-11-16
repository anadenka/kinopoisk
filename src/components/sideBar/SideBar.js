import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.scss";


function SideBar() {
  return (
    <div className='wrapLink'>
      <Link className='sideLink activeLink' to="/">
        <div className='wrapIcons'>
          <i className="fa-solid fa-house sideIcons activeIcon"></i>
        </div>
        Главная
      </Link>
      <Link className='sideLink' to="/cinema">
        <div className='wrapIcons'>
          <i className="fa-solid fa-play sideIcons"></i>
        </div>
        Онлайн-кинотеатр
      </Link>
      <Link className='sideLink' to="/movies">
        <div className='wrapIcons'>
          <i className="fa-solid fa-film sideIcons"></i>
        </div>
        Фильмы
      </Link>
      <Link className='sideLink' to="/serials">
        <div className='wrapIcons'>
          <i className="fa-solid fa-clone sideIcons"></i>
        </div>
        Сериалы
      </Link>
      <Link className='sideLink' to="/tickets">
        <div className='wrapIcons'>
          <i className="fa-solid fa-ticket-simple sideIcons"></i>
        </div>
        Билеты в кино
      </Link>
      <Link className='sideLink' to="/media">
        <div className='wrapIcons'>
          <i className="fa-solid fa-rectangle-list sideIcons"></i>
        </div>
        Медиа
      </Link>
    </div>
  )
}

export default SideBar