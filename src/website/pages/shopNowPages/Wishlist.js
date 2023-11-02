import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { setWishListDataCount } from '../../../reducers/wishlistSlice';
import { fetch } from '../../../utils'



const Wishlist = () => {
  const [wishListData, setWishListData] = useState([]); // State to hold wishlist data
  const dispatch = useDispatch();

  const getWishListData = async () => {
    try {
      const token = localStorage.getItem("muskan_token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await fetch(
        "/wishlist/all", // Replace with the correct API endpoint
        "post", // Use GET to retrieve wishlist data
        null,
        headers,
      );
      if (response.data) {
        setWishListData(response.data.data.wishlist);
        dispatch(setWishListDataCount(response.data.data.wishlist));
        // console.log('dis', dispatch(setWishListDataCount(response.data.data.wishlist)))


      } else {
        console.log('Failed to fetch wishlist data:', response);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getWishListData();
  }, []);
  dispatch(setWishListDataCount(wishListData));
  // console.log('dois', dispatch(setWishListDataCount(wishListData)))
  

  const handleRemoveWishList = async (product_id) => {
    try {
      const token = localStorage.getItem("muskan_token"); // Use getItem instead of get
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const body = {
        product_id: product_id,
      };
      const response = await fetch("/wishlist/remove", "post", body, headers);
      if (response.data) {
        getWishListData();
        alert(response.data.message);
      } else {
        console.log('Failed to remove product from wishlist:', response);
      }
    } catch (err) {
      // console.log(err);
    }
  };
  useEffect(() => {
    handleRemoveWishList();
  }, []);
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
        {wishListData.map((item, index) => (
          <Row className='py-4 border-b' key={index}>
            <Col sm={4}>
              <Row>
                <Col sm={3}>
                  <img src={item.product_thumbnail} alt="" className='w-100' />
                </Col>
                <Col sm={9} className='pt-4'> <p>{item.product_name}</p></Col>
              </Row>
            </Col>
            <Col sm={2} className='pt-4'>
              <span className='main-color'><i className="fa fa-inr"></i> {item.product_MRP}
              </span> &nbsp;
            </Col>

            {/* <Col sm={2} className='pt-4'>
              <button className='btn p-0 font-14'> - </button>
              <span className='px-3'> 4 </span>
              <button className='btn p-0'>  + </button>
            </Col> */}


            <Col sm={2} className='pt-4'>
              <font size="2" className="text-success"><i className="fa fa-check" aria-hidden="true"></i>{item.in_stock_status}</font>
            </Col>
            <Col sm={2} className='pt-4'>
              {/* <button className='btn btn-sm btn-danger rounded-1 main-bg' style={{ padding: "0 5px", lineHeight: "20px" }}> +  Add to cart</button> */}
              {/* <button className='btn btn-sm btn-danger rounded-1 main-bg' style={{ padding: "0 5px", lineHeight: "20px" }} onClick={() => handleAddToCart(product)}>+ Add to Cart</button> */}
              <button className='btn' onClick={() => handleRemoveWishList(item.product_id)}><i className="fa fa-times" aria-hidden="true"></i> </button>
            </Col>
          </Row>

        ))}
      </Container>
    </>
  )
}

export default Wishlist
