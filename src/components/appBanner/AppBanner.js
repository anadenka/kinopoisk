import React from 'react'
import imgBanner from './img/imgBanner.png'
import './AppBanner.scss'

function AppBanner() {
  return (
    <div className='banner'>
      <img alt='tele2' src={imgBanner}></img>
    </div>
  )
}

export default AppBanner