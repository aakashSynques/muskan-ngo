import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart, updateTotalAmount } from '../../../reducers/cart';
import { Link } from 'react-router-dom';
const CartItems = () => {
    const dispatch = useDispatch();
    // const cart = useSelector((state) => state.cart);
    const cart = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    // useEffect(() => {
    //     const cartJSON = JSON.stringify(cart);
    //     localStorage.setItem('cart', cartJSON);
    // }, [cart]);

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




    if (cart.length === 0) {
        return (
            <Container>
                <Row className='pt-2'>
                    <Col>
                        <font> Home › Cart</font>
                        <div className='pt-4'>
                            <h3 style={{ fontWeight: "500" }}>Cart</h3>
                        </div>
                        <div className='text-center my-5'>
                            <Image src={require(`../../assets/images/empty-cart.jpg`)} alt='muskaan ngo' className='' />
                            <h3>Oops! Your Cart is empty!</h3>
                            <p>Looks like you haven't added <br />anything to your cart yet </p>
                            <Link to="/books" className='btn btn-primary'>Shop Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <>
            <hr />
            <Container>
                <Row className='pt-2'>
                    <Col sm={8} className='r-border pr-4'>
                        <font> Home › Cart</font>
                        <div className='pt-4'>
                            <h3 style={{ fontWeight: "500" }}>Cart</h3>
                        </div>
                        <Row className='mt-4 pb-2 border-b'>
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
                        {cart.map((item, index) => (
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
                                <Col sm={2} className='pt-4'>
                                    <span className='main-color'>
                                        <i className="fa fa-inr"></i> {item.product_MSP}
                                    </span>
                                </Col>
                                <Col sm={2} className='pt-4'>
                                    <button className='btn p-0 font-14' onClick={() => handleDecrement(item)}>-</button>
                                    <span className='px-3'> {item.quantity}</span>
                                    <button className='btn p-0' onClick={() => handleIncrement(item)}>+</button>
                                </Col>
                                <Col sm={2} className='pt-4'>
                                    <font> <i className="fa fa-inr"></i> {(parseFloat(item.subTotal)).toFixed(2)}</font>
                                </Col>
                                <Col sm={1} className='pt-4'>
                                    <button className='btn' onClick={() => handleRemove(item)}>
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                </Col>
                            </Row>
                        ))
                        }
                    </Col>
                    <Col sm={4} className='px-4'>
                        <div className='mt-2'>
                            <h6 className='main-color f-w-8'><b>Order Summary</b></h6>
                            <table className='table'>
                                <tbody>
                                    <tr className='py-3'>
                                        <td>Subtotal</td>
                                        <td className='text-end'><i className="fa fa-inr"></i>{(parseFloat(totalAmount)).toFixed(2)}</td>
                                    </tr>
                                    <tr className='py-3'>
                                        <td>Discount (0%)</td>
                                        <td className='text-end'><i className="fa fa-inr"></i> 0 </td>
                                    </tr>
                                    <tr className='py-3'>
                                        <td>GST (0%)</td>
                                        <td className='text-end'><i className="fa fa-inr"></i> 0.00 </td>
                                    </tr>
                                    <tr className='py-3'>
                                        <td>Delivery Charge</td>
                                        <td className='text-end'><i className="fa fa-inr"></i> 55 .00 </td>
                                    </tr>
                                    <tr className='py-3'>
                                        <td>Order total</td>
                                        <td className='text-end main-color' style={{ color: '#a20401' }}><i className="fa fa-inr"></i> {(parseFloat(totalAmount) + parseFloat(55.00)).toFixed(2)} </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className='text-danger'>7-10 days delivery time. Depending on distance of the destination.</p>
                            <Link className='btn  w-100 mt-3 main-bg text-white' to="/checkout">Proceed to checkout</Link>
                        </div>
                    </Col>
                </Row>



            </Container>
        </>
    );
};

export default CartItems;