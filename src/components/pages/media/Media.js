import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages/pages.scss';


function Media() {
  return (
    <div className='d-flex flex-column pagesTitle'>
      this is Media
      <Link to="/">Return to main page</Link>
    </div>
  )
}

export default Media