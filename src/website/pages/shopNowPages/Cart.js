import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CartItems from './CartItems';
import CheckOut from './CheckOut';

const Cart = () => {
    const [activeSection, setActiveSection] = useState('shoppingBag'); // Initial section is shoppingBag

    const handleClick = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <hr />
            <Container>
                <font> Home › Cart</font>
                <div className='mt-2 pb-5 text-center'>
                    <h2 style={{ fontWeight: "500" }}>Cart</h2>
                </div>

                <div className="grid-container">
                    <div
                        className={`grid-item grid-process ${activeSection === 'shoppingBag' ? 'active-grid-item' : ''}`}
                        onClick={() => handleClick('shoppingBag')}
                    >
                        <span className="status pull-left"> <i className="fa">1</i></span>
                        <div className="pull-left">
                            <h6>SHOPPING BAG</h6>
                            <span>View your items</span>
                        </div>
                    </div>

                    <div
                        className={`grid-item grid-process ${activeSection === 'checkout' ? 'active-grid-item' : ''}`}
                        onClick={() => handleClick('checkout')}
                    >
                        <span className="status pull-left"> <i className='fa'> <b>2</b> </i></span>
                        <div className="pull-left">
                            <h6>SHIPPING AND CHECKOUT</h6>
                            <span>Enter your details</span>
                        </div>
                    </div>

                    <div
                        className={`grid-item grid-process ${activeSection === 'confirmation' ? 'active-grid-item' : ''}`}
                        onClick={() => handleClick('confirmation')}
                    >
                        <span className="status pull-left"> <i className='fa'> <b>3</b> </i></span>
                        <div className="pull-left">
                            <h6>CONFIRMATION</h6>
                            <span>Review your order!</span>
                        </div>
                    </div>
                </div>

                <div className='mt-2'>
                    {activeSection === 'shoppingBag' && (
                        <div className='pt-5'>
                            <CartItems />
                        </div>
                    )}

                    {activeSection === 'checkout' && (
                        <div className='pt-5'>
                            <CheckOut />
                        </div>
                    )}

                    {activeSection === 'confirmation' && (
                        <div>
                            <h6>Confirmation Section</h6>
                            {/* Add the content for the confirmation section here */}
                        </div>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Cart;
