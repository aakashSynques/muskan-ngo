import React from 'react'
import { Link } from 'react-router-dom'

const CartNav = () => {
    return (
        <div>
            <div className="grid-container">

                <div
                    className="grid-item grid-process"
                >
                    <Link to="/cart">
                        <span className="status pull-left"> <i className="fa">1</i></span>
                        <div className="pull-left">
                            <h6>SHOPPING BAG</h6>
                            <span>View your items</span>
                        </div>
                    </Link>
                </div>



                <div
                    className="grid-item grid-process"
                >
                    <Link to="/checkout">
                        <span className="status pull-left"> <i className='fa'> <b>2</b> </i></span>
                        <div className="pull-left">
                            <h6>SHIPPING AND CHECKOUT</h6>
                            <span>Enter your details</span>
                        </div>
                    </Link>
                </div>

                <div
                    className="grid-item grid-process"
                >
                    <span className="status pull-left"> <i className='fa'> <b>3</b> </i></span>
                    <div className="pull-left">
                        <h6>CONFIRMATION</h6>
                        <span>Review your order!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartNav
