import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{ height: '90vh' }} className='d-flex justify-content-center align-items-center flex-column text-center'>
      <img 
        className='w-25 mb-4' 
        src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png" 
        alt="Page not found" 
      />
      <h1 className='my-3'>WE ARE SORRY, LOOKS LIKE YOU'RE LOST</h1>
      <Link to={'/'} className='btn btn-info text-white'>BACK TO HOME</Link>
    </div>
  )
}

export default PageNotFound