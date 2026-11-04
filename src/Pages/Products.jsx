import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <>
            <h1 className='text-danger'>Products</h1>
            <div className='m-5'>
                <div className='row'>
                    <div className='col-3'>
                        <Card>
                            <Card.Img style={{ height: "250px" }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTotR1KXH-IzcNXS4s-WNjBnAmlal__XaC7PSVqpMsOYSb_vl15tKowjI&s=10" />
                            <Card.Body className='text-center'>
                                <Card.Title>Card Title</Card.Title>
                                <Link to={`/product/:id`} className='btn btn-primary'>View More</Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
