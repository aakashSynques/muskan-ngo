import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { setIntervalCart } from "../../reducers/cart";

function HeaderTop() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {

      setIsInitialRender(false);
      return;
    }
    console.log("cart save");
    const cartjsonString = JSON.stringify(cart);
    localStorage.setItem("cartjsonString", cartjsonString);
  }, [cart]);

  useEffect(() => {
    // If it's the first render
    const cartjsonString = localStorage.getItem("cartjsonString");
    if (cartjsonString) {
      try {

        const cartjsonObject = JSON.parse(cartjsonString);
        dispatch(setIntervalCart(cartjsonObject));
      } catch (error) {

        dispatch(setIntervalCart({ items: [], totalAmount: 0 }));
      }
    }
  }, []);
  return (

 

    <>
       <section className="header-top">
      <Container>
        <Row className="top-content-wrap">
          <Col lg={8} sm={12} xs={12}>
            <ul className="m-0 p-0">
              <li className='pt-1'>
                <a href="#" className='text-white text-decoration-none'>
                  <i className="fa fa-envelope"></i> muskaan@muskaan.org
                </a>
              </li>
              <li>
                <a href="#" className='text-white text-decoration-none'>
                  <i className="fa fa-phone"></i> +91 74052 97103
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4} sm={4} xs={4} className="text-end d-none d-md-block">
            <a href="#" className="default-btn text-white text-decoration-none">
              DONATE NOW <i className="fa fa-money"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default HeaderTop;
