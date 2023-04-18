import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <div className='mb-3 me-2 mb-md-0 text-muted text-decoration-none 1h-1'>
          <Link to="/" className='mb-3 me-2 mb-md-0 text-muted text-decoration-none 1h-1'>

          </Link>
          <span className='text-muted'> @ 2022 Food,INC</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
