import React from 'react'
import { Link } from 'react-router-dom'

function OnlineCinema() {
  return (
    <div>
      this is OnlineCinema
      <Link to="/mainPage">Return to main page</Link>
      <Link to="/media">Go to media page</Link>
    </div>
  )
}

export default OnlineCinema