import React from 'react'
import imgBanner from './img/imgBanner.png'
import './AppBanner.scss'

function AppBanner() {
  return (
    <div className='banner'>
      <img className='img' alt='banner' src={imgBanner}/>
    </div>
  )
}

export default AppBanner