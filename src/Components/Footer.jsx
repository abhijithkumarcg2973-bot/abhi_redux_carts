import React from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaInstagram, FaFacebook, FaWhatsapp, FaTwitter, FaArrowRight } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

function Footer() {
  return (
    <div style={{ backgroundColor: '#1d6f9a' }} className='container-fluid text-light pt-4 mt-5'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-4 col-md-6'>
            <h5 className='fw-bold d-flex align-items-center gap-2'>
              <FaTruckFast /> DailyCart
            </h5>
            <p style={{ fontSize: '14px' }}>
              Designed and built with all the love in the world by the Luminar team with the help of our contributors.
            </p>
            <p style={{ fontSize: '14px' }}>
              Code licensed Luminar, docs CC BY 3.0.
            </p>
            <p style={{ fontSize: '14px' }}>Currently v5.3.2.</p>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6'>
            <h5>Links</h5>
            <div className='d-flex flex-column gap-1' style={{ fontSize: '14px' }}>
              <Link to={'/'} className='text-white text-decoration-none'>Home</Link>
              <Link to={'/wishlist'} className='text-white text-decoration-none'>Wishlist</Link>
              <Link to={'/cart'} className='text-white text-decoration-none'>Cart</Link>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6'>
            <h5>Guides</h5>
            <div className='d-flex flex-column gap-1' style={{ fontSize: '14px' }}>
              <a href="https://react.dev/" target="_blank" rel="noreferrer" className='text-white text-decoration-none'>React</a>
              <a href="https://react-bootstrap.netlify.app/" target="_blank" rel="noreferrer" className='text-white text-decoration-none'>React Bootstrap</a>
              <a href="https://reactrouter.com/" target="_blank" rel="noreferrer" className='text-white text-decoration-none'>React Router</a>
            </div>
          </div>
          <div className='col-lg-4 col-md-12'>
            <h5>Contact Us</h5>
            <div className='d-flex mb-3'>
              <input 
                type="text" 
                className='form-control me-2' 
                placeholder='Email Here' 
                style={{ fontSize: '14px' }}
              />
              <button className='btn btn-warning text-dark'>
                <FaArrowRight />
              </button>
            </div>
            <div className='fs-5 d-flex gap-3'>
              <FaFacebook />
              <FaTwitter />
              <FaWhatsapp />
              <FaInstagram />
              <MdEmail />
              <FaPhoneAlt />
            </div>
          </div>

        </div>
        <div className='text-center mt-4 pt-3 border-top' style={{ fontSize: '13px' }}>
          Copyright © August 2025 Batch, Daily Cart. Built with React Redux.
        </div>
      </div>
    </div>
  )
}

export default Footer