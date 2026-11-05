import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Card from 'react-bootstrap/Card';

function Wishlist() {
  return (
    <div className='container my-5'>
      <h1 className='pt-5 text-primary fw-bold'>User's Wishlist</h1>
      <div className='row'>
        <div className='col-3'>
          <Card>
            <Card.Img style={{ height: "250px" }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTotR1KXH-IzcNXS4s-WNjBnAmlal__XaC7PSVqpMsOYSb_vl15tKowjI&s=10" />
            <Card.Body className='text-center'>
              <Card.Title>Card Title</Card.Title>
              <div className="d-flex justify-content-evenly">
                <button className="btn text-danger fs-4"><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                <button className="btn text-success fs-4"><FontAwesomeIcon icon={faCartPlus} /></button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
