import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart, updateTotalAmount } from '../../reducers/cart';
import { Link } from 'react-router-dom';

const CartSidebar = ({ isOpen, closeSidebar, categoryList }) => {
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
            <button className='btn button-toggle' onClick={closeSidebar}>
                {/* <i className="fa fa-arrow-left" aria-hidden="true"></i> */}
                <i className="fa fa-times" aria-hidden="true"></i>

            </button>
            <h5 className='text-center pt-3 pb-3'>SHOPPING BAG</h5>
            <div className='cart-drawer px-2'>
                <Container>
                    {cart.length > 0 ? (
                        cart.map((item, index) => (
                            <Row key={index} className='py-4 cart-item'>
                                <Col sm={3}>
                                    <img src={item.product_thumbnail} alt="" className='w-100' />
                                </Col>
                                <Col sm={6}>
                                    <b>{item.product_name}</b> <br /><br />
                                    <div className='quntity-btn'>
                                        <button className='btn p-0 font-14' onClick={() => handleDecrement(item)}><b>-</b></button>
                                        <span className='px-3'> <b>{item.quantity}</b> </span>
                                        <button className='btn p-0' onClick={() => handleIncrement(item)}><b> + </b> </button>
                                    </div>
                                </Col>
                                <Col sm={3} className='text-end'>
                                    <font><i className="fa fa-inr"></i> <b> {item.subTotal}</b></font>
                                    <br /> <br />
                                    <button className='btn' onClick={() => handleRemove(item)}>
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                </Col>
                            </Row>
                        ))
                    ) : (
                        <div className='text-center'>
                            <i className="fa fa-cart-plus mt-5" aria-hidden="true" style={{ fontSize: "125px", color: "#efefef" }}></i>
                            <h3 className='text-center text-dark pt-5'>Cart is empty.</h3>
                        </div>
                    )}
                    <Row>
                        <tr className='py-3'>
                            <td className='pull-left'> <b>Subtotal</b></td>
                            <td className='main-color text-end pull-right' style={{ color: '#a20401' }}>
                                <i className="fa fa-inr"></i> <b>{totalAmount}</b>
                            </td>
                        </tr>
                        <Link className='btn w-100 mt-1 main-bg text-white' to="/checkout" onClick={closeSidebar}>
                            Proceed to checkout
                        </Link>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default CartSidebar;
