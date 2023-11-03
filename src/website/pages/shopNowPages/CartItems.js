import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart, updateTotalAmount } from '../../../reducers/cart';
import CartNav from './CartNav';
import { Link } from 'react-router-dom';
const CartItems = () => {
    const dispatch = useDispatch();
    // const cart = useSelector((state) => state.cart);
    const cart = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);


    console.log('cart', cart);
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
            // setTotalAmount(newTotalAmount);
            dispatch(updateTotalAmount(newTotalAmount));
        };
        calculateTotalAmount();
    }, [cart, dispatch]);


    return (
        <>
            <hr />
            <Container>

                <font> Home › Cart</font>
                <div className='mt-2 pb-5 text-center'>
                    <h2 style={{ fontWeight: "500" }}>Cart</h2>
                </div>
                <CartNav />

                <Row className='pt-5'>
                    <Col sm={8} className='r-border pr-4'>
                        <Row className='mt-2 pb-2 border-b'>
                            <Col sm={5}>
                                <b> Product Name</b>
                            </Col>
                            <Col sm={3}>
                                <b>Unit Price</b>
                            </Col>
                            <Col sm={2}>
                                <b>Quantity</b>
                            </Col>
                            <Col sm={1}>
                                <b>SubTotal</b>
                            </Col>
                            <Col sm={1}></Col>
                        </Row>

                        {cart.length > 0 ? (
                            cart.map((item, index) => (
                                <Row key={index} className='py-4 border-b'>
                                    <Col sm={5}>
                                        <Row>
                                            <Col sm={3}>
                                                <img src={item.product_thumbnail} alt="" className='w-100' />
                                            </Col>
                                            <Col sm={9} className='pt-3'>
                                                <p>{item.product_name}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={3} className='pt-4'>
                                        <span className='main-color'>
                                            <i className="fa fa-inr"></i> {item.product_MSP}
                                        </span>
                                    </Col>

                                    <Col sm={2} className='pt-4'>
                                        <button className='btn p-0 font-14' onClick={() => handleDecrement(item)}>-</button>
                                        <span className='px-3'> {item.quantity}</span>
                                        <button className='btn p-0' onClick={() => handleIncrement(item)}>+</button>
                                    </Col>


                                    <Col sm={1} className='pt-4'>
                                        <font>{item.subTotal}</font>
                                    </Col>
                                    <Col sm={1} className='pt-4'>
                                        <button className='btn' onClick={() => handleRemove(item)}>
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                        </button>
                                    </Col>
                                </Row>
                            ))
                        ) : (

                            <div className='text-center'>
                                <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                <p className='text-center '>Cart is empty.</p>
                            </div>
                        )}
                    </Col>


                    <Col sm={4} className='px-4'>
                        <div className='mt-2'>
                            <h6 className='main-color f-w-8'><b>CART TOTALS</b></h6>
                            <table className='table'>
                                <tbody>
                                    <tr className='py-3'>
                                        <td>Subtotal</td>
                                        <td className='text-end'><i className="fa fa-inr"></i>{totalAmount}</td>
                                    </tr>
                                    <tr className='py-3'>
                                        <td>Total</td>
                                        <td className='text-end main-color' style={{ color: '#a20401' }}><i className="fa fa-inr"></i> {totalAmount}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <Button className='btn btn-danger w-100 mt-3'>
                            Proceed to checkout</Button> */}
                            <Link className='btn  w-100 mt-3 main-bg text-white'>Proceed to checkout</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CartItems;