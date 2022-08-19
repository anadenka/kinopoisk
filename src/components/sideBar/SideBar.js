import React from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.scss";

// const sideLinks = {
// }

function SideBar() {
  return (
    <div className='wrapLink'>
      <Link className='sideLink activeLink' to="/main">
        <div className='wrapIcons'>
          <i class="fa-solid fa-house sideIcons activeIcon"></i>
        </div>
        Главная
      </Link>
      <Link className='sideLink' to="/onlineCinema">
        <div className='wrapIcons'>
          <i class="fa-solid fa-play sideIcons"></i>
        </div>
        Онлайн-кинотеатр
      </Link>
      <Link className='sideLink' to="/movies">
        <div className='wrapIcons'>
          <i class="fa-solid fa-film sideIcons"></i>
        </div>
        Фильмы
      </Link>
      <Link className='sideLink' to="/cinema">
        <div className='wrapIcons'>
          <i class="fa-solid fa-clone sideIcons"></i>
        </div>
        Сериалы
      </Link>
      <Link className='sideLink' to="/movieTickets">
        <div className='wrapIcons'>
          <i class="fa-solid fa-ticket-simple sideIcons"></i>
        </div>
        Билеты в кино
      </Link>
      <Link className='sideLink' to="/media">
        <div className='wrapIcons'>
          <i class="fa-solid fa-rectangle-list sideIcons"></i>
        </div>
        Медиа
      </Link>

    </div>
  )
}

export default SideBar