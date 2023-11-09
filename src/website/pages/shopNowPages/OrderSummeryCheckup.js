
import { useSelector, useDispatch } from 'react-redux';
import { fetch } from '../../../utils';
import React, { useState, useCallback, useEffect } from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OrderSummeryCheckup = () => {
    const dispatch = useDispatch();
    // const cart = useSelector((state) => state.cart);
    const cart = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    useEffect(() => {
        const cartJSON = JSON.stringify(cart);
        localStorage.setItem('cart', cartJSON);
    }, [cart]);
    return (
        <div className='card-fixed'>

            <h6 className='main-color f-w-8 pb-4 pt-2'>YOUR ORDER</h6>
          

            <table className="table scroll-content">
                <tbody>
                    {cart.map((item, index) => (
                        <tr className='py-3' key={index}>
                            <td style={{ width: "4.6em" }}>
                                <div className="product-thumbnail ">
                                    <div className="product-thumbnail__wrapper">
                                        <img alt=""
                                            className="product-thumbnail__image"
                                            style={{ width: "62px" }}
                                            src={item.product_thumbnail} />
                                        <span className="product-thumbnail__quantity" aria-hidden="true">{item.quantity}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <b>{item.product_name}</b>
                                <p className='summery-card'>{item.categroy_name}</p>
                            </td>

                            <td className='text-end main-color'><i className="fa fa-inr"></i> {item.subTotal}</td>
                        </tr>

                    ))}
                </tbody>
            </table>


            <table className='table'>
                <tbody>
                    <tr>
                        <td> <b >Total</b></td>

                        <td className='text-end'><b>INR {totalAmount}</b></td>
                    </tr>
                </tbody>
            </table>

            <div className='mt-5'>
                <font size="2" className="text-danger">CREDIT CARD/DEBIT CARD/NETBANKING</font>
                <Image src={require('../../assets/images/payment.png')} alt="" className='' /> <br />
                <font size='2'>Pay securely by Credit or Debit card or Internet Banking through Razorpay.</font> <br /> <br />
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                    <Link to="/"> privacy policy.</Link>
                </p>
            </div>

        </div>
    )
}

export default OrderSummeryCheckup
