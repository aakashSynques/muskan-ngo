import React, {useEffect} from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../../reducers/cart';

const CartItems = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
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
       const calculateSubtotal = (item) => {
        return item.subTotal;
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + calculateSubtotal(item), 0);
    };

    return (
        <Container>
            <Row>
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
                                    <font>{calculateSubtotal(item)} </font>
                                </Col>
                                <Col sm={1} className='pt-4'>
                                    <button className='btn' onClick={() => handleRemove(item)}>
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                </Col>
                            </Row>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </Col>





                
                <Col sm={4} className='px-4'>
                        <div className='mt-2'>
                            <h6 className='main-color f-w-8'><b>CART TOTALS</b></h6>
                            <table className='table'>
                                <tbody>
                                    <tr className='py-3'>
                                        <td>Subtotal</td>
                                        <td className='text-end'><i className="fa fa-inr"></i> 50.00</td>
                                    </tr>
                                    <tr className='py-3'>
                                        <td>Total</td>
                                        <td className='text-end main-color' style={{ color: '#a20401' }}><i className="fa fa-inr"></i> 50.00</td>
                                    </tr>
                                </tbody>
                            </table>
                            <Button className='btn btn-danger w-100 mt-3'>
                                Proceed to checkout</Button>
                        </div>
                    </Col>
            </Row>
        </Container>
    );
};

export default CartItems;