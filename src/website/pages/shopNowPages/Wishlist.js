import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Wishlist = () => {
  return (
    <>
      <hr />
      <Container>
        <font> Home › WishList</font>
        <div className='mt-3 pb-3 text-center' > <h3>My wishlist</h3> </div>
        <Row className='mt-3 pb-2 border-b'>
          <Col sm={4}>
            <b> Product Name</b>
          </Col>
          <Col sm={2}>
            <b>Unit Price</b>
          </Col>
          <Col sm={2}>
            <b>Quantity</b>
          </Col>
          <Col sm={2}>
            <b>Stock Status</b>
          </Col>
          <Col sm={2}>

          </Col>
        </Row>

        <Row className='py-4 border-b'>
          <Col sm={4}>
            <Row>
              <Col sm={3}>
                <img src='https://store.muskaan.org/wp-content/uploads/2021/11/41-300x300.png' alt="" className='w-100' />
              </Col>
              <Col sm={9} className='pt-4'> <p>Basti mein Chor / thief in the Basti</p></Col>
            </Row>
          </Col>
          <Col sm={2} className='pt-4'>
            <span className='main-color'><i className="fa fa-inr"></i> 200.00
            </span> &nbsp;
            <font size="1" className="text-secondary">
              <del><i className="fa fa-inr"></i> 250.00</del>
            </font>
          </Col>
          <Col sm={2} className='pt-4'>
            <button className='btn p-0 font-14'> - </button>
            <span className='px-3'> 4 </span>
            <button className='btn p-0'>  + </button>
          </Col>
          <Col sm={2} className='pt-4'>
            <font size="2" className="text-success"><i className="fa fa-check" aria-hidden="true"></i> In Stock</font>
          </Col>
          <Col sm={2} className='pt-4'>
            <button className='btn btn-sm btn-danger rounded-1 main-bg' style={{ padding: "0 5px", lineHeight: "20px" }}> +  Add to cart</button>
            <button className='btn'> <i className="fa fa-times" aria-hidden="true"></i> </button>
          </Col>
        </Row>

        <Row className='py-4 border-b'>
          <Col sm={4}>
            <Row>
              <Col sm={3}>
                <img src='https://store.muskaan.org/wp-content/uploads/2021/11/41-300x300.png' alt="" className='w-100' />
              </Col>
              <Col sm={9} className='pt-4'> <p>Basti mein Chor / thief in the Basti</p></Col>
            </Row>
          </Col>
          <Col sm={2} className='pt-4'>
            <span className='main-color'><i className="fa fa-inr"></i> 200.00
            </span> &nbsp;
            <font size="1" className="text-secondary">
              <del><i className="fa fa-inr"></i> 250.00</del>
            </font>
          </Col>
          <Col sm={2} className='pt-4'>
            <button className='btn p-0 font-14'> - </button>
            <span className='px-3'> 4 </span>
            <button className='btn p-0'>  + </button>
          </Col>
          <Col sm={2} className='pt-4'>
            <font size="2" className="text-success"><i className="fa fa-check" aria-hidden="true"></i> In Stock</font>
          </Col>
          <Col sm={2} className='pt-4'>
            <button className='btn btn-sm btn-danger rounded-1 main-bg' style={{ padding: "0 5px", lineHeight: "20px" }}> +  Add to cart</button>
            <button className='btn'> <i className="fa fa-times" aria-hidden="true"></i> </button>
          </Col>
        </Row>



        <Row className='py-4 border-b'>
          <Col sm={4}>
            <Row>
              <Col sm={3}>
                <img src='https://store.muskaan.org/wp-content/uploads/2021/11/41-300x300.png' alt="" className='w-100' />
              </Col>
              <Col sm={9} className='pt-4'> <p>Basti mein Chor / thief in the Basti</p></Col>
            </Row>
          </Col>
          <Col sm={2} className='pt-4'>
            <span className='main-color'><i className="fa fa-inr"></i> 200.00
            </span> &nbsp;
            <font size="1" className="text-secondary">
              <del><i className="fa fa-inr"></i> 250.00</del>
            </font>
          </Col>
          <Col sm={2} className='pt-4'>
            <button className='btn p-0 font-14'> - </button>
            <span className='px-3'> 4 </span>
            <button className='btn p-0'>  + </button>
          </Col>
          <Col sm={2} className='pt-4'>
            <font size="2" className="text-success"><i className="fa fa-check" aria-hidden="true"></i> In Stock</font>
          </Col>
          <Col sm={2} className='pt-4'>
            <button className='btn btn-sm btn-danger rounded-1 main-bg' style={{ padding: "0 5px", lineHeight: "20px" }}> +  Add to cart</button>
            <button className='btn'> <i className="fa fa-times" aria-hidden="true"></i> </button>
          </Col>
        </Row>




        <Row className='py-4 border-b'>
          <Col sm={4}>
            <Row>
              <Col sm={3}>
                <img src='https://store.muskaan.org/wp-content/uploads/2021/11/41-300x300.png' alt="" className='w-100' />
              </Col>
              <Col sm={9} className='pt-4'> <p>Basti mein Chor / thief in the Basti</p></Col>
            </Row>
          </Col>
          <Col sm={2} className='pt-4'>
            <span className='main-color'><i className="fa fa-inr"></i> 200.00
            </span> &nbsp;
            <font size="1" className="text-secondary">
              <del><i className="fa fa-inr"></i> 250.00</del>
            </font>
          </Col>
          <Col sm={2} className='pt-4'>
            <button className='btn p-0 font-14'> - </button>
            <span className='px-3'> 4 </span>
            <button className='btn p-0'>  + </button>
          </Col>
          <Col sm={2} className='pt-4'>
            <font size="2" className="text-success"><i className="fa fa-check" aria-hidden="true"></i> In Stock</font>
          </Col>
          <Col sm={2} className='pt-4'>
            <button className='btn btn-sm btn-danger rounded-1 main-bg' style={{ padding: "0 5px", lineHeight: "20px" }}> +  Add to cart</button>
            <button className='btn'> <i className="fa fa-times" aria-hidden="true"></i> </button>
          </Col>
        </Row>


      </Container>
    </>
  )
}

export default Wishlist
