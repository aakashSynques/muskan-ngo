import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart, updateTotalAmount } from '../../reducers/cart';
import { Link } from 'react-router-dom';
const CartSidebar = ({ isOpen, closeSidebar }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    useEffect(() => {
        const cartJSON = JSON.stringify(cart);
        localStorage.setItem('cart', cartJSON);
    }, [cart]);
    const handleIncrement = (item) => {
        dispatch(updateQuantity({ product_id: item.product_id, quantity: item.quantity + 1 }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ product_id: item.product_id, quantity: item.quantity - 1 }));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeFromCart(item.product_id));
    };

    useEffect(() => {
        const calculateTotalAmount = () => {
            let total = 0;
            for (const item of cart) {
                total += parseFloat(item.subTotal);
            }
            const newTotalAmount = total.toFixed(2);
            dispatch(updateTotalAmount(newTotalAmount));
        };
        calculateTotalAmount();
    }, [cart, dispatch]);

    return (
        <div className={`cart-sidebar  ${isOpen ? 'open' : ''}`}>
            <div className='cart-side'>
                <button type='button' className='btn button-toggle1' id="cartToggle" aria-label="Toggle Cart" onClick={closeSidebar}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <h6 className='text-center py-2'>Total Item</h6>
            </div>
            <div className='cart-drawer'>
                <Container>
                    {cart.length > 0 ? (
                        <div>
                            {cart.map((item, index) => (
                                <Row className='py-2 cart-item'>
                                    <Col lg={3} xs={3}>
                                        <img src={item.product_thumbnail} alt="" className='w-100' />
                                    </Col>
                                    <Col lg={6} xs={6} style={{ lineHeight: "19px" }}>
                                        <p className='mb-0'>{item.product_name}</p>
                                        <font size="1">Unit Price: {item.product_MRP}</font>
                                        <div className='quntity-btn'>
                                            <button className='btn p-0 font-14' onClick={() => handleDecrement(item)}><b>-</b></button>
                                            <span className='px-2'> {item.quantity} </span>
                                            <button className='btn p-0' onClick={() => handleIncrement(item)}><b> + </b> </button>
                                        </div>
                                    </Col>
                                    <Col lg={3} xs={3}>
                                        <font className="main-color"><i className="fa fa-inr"></i>  {item.subTotal}</font>
                                        <br /> <br />
                                        <button className='btn' onClick={() => handleRemove(item)}>
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </button>
                                    </Col>
                                </Row>
                            ))}
                        </div>

                    ) : (
                        <div className='text-center'>
                            <i className="fa fa-cart-plus mt-5" aria-hidden="true" style={{ fontSize: "80px", color: "#e0e0e0" }}></i>
                            <h4 className='text-center text-dark pt-3'>Cart is empty!</h4>
                            <Link to="/books" className='btn btn-primary mt-3'>Shop Now</Link>
                        </div>
                    )}


                    {cart.length > 0 ? (
                        <>
                            <Row>
                                <div className='col-12 side-cart-pay'>
                                    <Link className='btn w-100 mt-1 main-bg text-white' to="/cart" onClick={closeSidebar}>
                                        MY CART |  <i className="fa fa-inr"></i> <b>{totalAmount}</b>
                                    </Link>
                                </div>
                            </Row>


                        </>
                    ) : (
                        null
                    )}



                </Container>
            </div>
        </div>
    );
};

export default CartSidebar;
