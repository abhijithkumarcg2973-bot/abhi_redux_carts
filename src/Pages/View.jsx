import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function View() {
  return (
    <div className='container my-5 '>
      <div style={{height:'90vh'}} className="row">
        <div className='col-lg-6 text-center'>
        <img className='img-fluid py-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTotR1KXH-IzcNXS4s-WNjBnAmlal__XaC7PSVqpMsOYSb_vl15tKowjI&s=10" alt="product" />
        <div className='d-flex justify-content-evenly mt-3'>
          <button className='btn btn-info'>ADD TO WISHLIST</button>
          <button className='btn btn-success'>ADD TO CART</button>
        </div>
        </div>
        <div className='col-lg-6 my-5'>
            <div className='col-lg-6'>
              <h3 className='fw-bold'>Title</h3>
              <h2 className='fw-bold'>$30</h2>
              <h4 className='fw-bold'>Brand:</h4>
              <h4 className='fw-bold'>Category</h4>
              <h4 className='fw-bold'>Description</h4>
              <h4 className='fw-bold'>Client Reviews</h4>
              <div className='border rounted shadow p-2 my-3'>
                <p><span className='fw-bolder'>Name : </span>message</p>
                <p>Rating : 5 <FontAwesomeIcon icon={faStar} className="text-warning"/></p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default View
