
import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart, updateTotalAmount } from '../../reducers/cart';
import { Link } from 'react-router-dom';

const CartSidebar = ({ isOpen, closeSidebar, categoryList }) => {
    const dispatch = useDispatch();
    // const cart = useSelector((state) => state.cart);
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
            // setTotalAmount(newTotalAmount);
            dispatch(updateTotalAmount(newTotalAmount));
        };
        calculateTotalAmount();
    }, [cart, dispatch]);


    return (
        <div className={`cart-sidebar  ${isOpen ? 'open' : ''}`}>
            <button className='btn button-toggle' onClick={closeSidebar}><i className="fa fa-arrow-left" aria-hidden="true"></i> </button>
            <h5 className='text-center pt-3 pb-3'>SHOPPING BAG</h5>
            <div className='cart-drawer px-2'>
                {/* <table>
                    <tbody>

                        {cart.length > 0 ? (
                            cart.map((item, index) => (
                                <tr className='cart-item'>
                                    <td><img src={item.product_thumbnail} alt="" className='w-100' /></td>
                                    <td>     <b>{item.product_name}</b> <br />
                                    </td>
                                    <td>  <span className='main-color'>
                                        <i className="fa fa-inr"></i> {item.subTotal}
                                    </span>

                                        <button className='btn' onClick={() => handleRemove(item)}>
                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                        </button>
                                    </td>

                                </tr>
                            ))
                        ) : (

                            <div className='text-center'>
                                <i class="fa fa-cart-plus mt-5" aria-hidden="true" style={{ fontSize: "125px", color: "#efefef" }}></i>
                                <p className='text-center pt-2'>Cart is empty.</p>
                            </div>
                        )}

                    </tbody>
                </table> */}
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
                                {/* 
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
                            </Col> */}
                            </Row>
                        ))
                    ) : (

                        <div className='text-center'>
                            <i className="fa fa-cart-plus mt-5" aria-hidden="true" style={{ fontSize: "125px", color: "#efefef" }}></i>
                            <h3 className='text-center text-dark pt-5'>Cart is empty.</h3>

                        </div>
                    )}

                    {/* <table className='table'>
                        <tbody>
                            <tr className='py-3'>
                                <td> <b>Subtotal</b></td>
                                <td className='main-color text-end' style={{ color: '#a20401' }}><i className="fa fa-inr"></i> <b>{totalAmount}</b> </td>
                            </tr>
                            <tr className='w-100'>
                                <Link className='btn  w-100 mt-1 main-bg text-white' to="/checkout">Proceed to checkout</Link>
                            </tr>
                        </tbody>
                    </table> */}

                    {/* <div>
<tr className='py-3'>
                                <td> <b>Subtotal</b></td>
                                <td className='main-color text-end' style={{ color: '#a20401' }}><i className="fa fa-inr"></i> <b>{totalAmount}</b> </td>
                            </tr>
<Link className='btn  w-100 mt-1 main-bg text-white' to="/checkout">Proceed to checkout</Link>
</div> */}

                    <Row>
                        <tr className='py-3'>
                            <td> <b>Subtotal</b></td>
                            <td className='main-color text-end' style={{ color: '#a20401' }}><i className="fa fa-inr"></i> <b>{totalAmount}</b> </td>
                        </tr>
                        <Link className='btn  w-100 mt-1 main-bg text-white' to="/checkout">Proceed to checkout</Link>
                    </Row>

                </Container>
            </div>

        </div>


    );
};

export default CartSidebar;
