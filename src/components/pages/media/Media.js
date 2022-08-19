import React from 'react'
import { Link } from 'react-router-dom'

function Media() {
  return (
    <div className='d-flex flex-column'>
      this is Media
      <Link to="/mainPage">Return to main page</Link>
    </div>
  )
}

export default Media