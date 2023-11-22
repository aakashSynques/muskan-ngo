import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { setWishListDataCount } from '../../../reducers/wishlistSlice';
import { fetch } from '../../../utils'
import { addToCart, initializeCart } from '../../../reducers/cart';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


const Wishlist = () => {
  const navigate = useNavigate();

  const [wishListData, setWishListData] = useState([]); // State to hold wishlist data
  const dispatch = useDispatch();
  const getWishListData = async () => {
    try {
      const token = localStorage.getItem("muskan_token");
      if (!token) {
        // Redirect to login page
        navigate('/account/login');
        return;
      }

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
        // alert(response.data.message);
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



  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = (product) => {
    const cartItemData = {
      attributes: product.attributes,
      product_name: product.product_name,
      product_MSP: product.product_MSP,
      brand_id: product.brand_id,
      category_id: product.category_id,
      gst_id: product.gst_id,
      gst_percent: product.gst_percent,
      images: product.images,
      in_stock_status: product.in_stock_status,
      is_delete: product.is_delete,
      product_MRP: product.product_MRP,
      product_additional_information: product.product_additional_information,
      product_code: product.product_code,
      product_description: product.product_description,
      product_id: product.product_id,
      product_name_disp: product.product_name_disp,
      product_sku: product.product_sku,
      product_slug: product.product_slug,
      product_thumbnail: product.product_thumbnail,
      sub_category_id: product.sub_category_id,
      quantity: quantity,
      subTotal: product.product_MSP,
    };
    dispatch(addToCart(cartItemData));
    handleRemoveWishList(product.product_id);
    getWishListData();
  };

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
          {/* <Col sm={2}>
            <b>Quantity</b>
          </Col> */}
          <Col sm={2}>
            <b>Stock Status</b>
          </Col>
          <Col sm={2}>
          </Col>
        </Row>
        {wishListData.length === 0 ? ( // Check if wishlist is empty
          <>
            <div className='text-center'>
              <p className='text-center pt-5'>No products in your wishlist. Select some products to add.</p>

            </div>
          </>
        ) : (
          wishListData.map((item, index) => (
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

              <Col sm={2} className='pt-4'>
                <font size="2" className="text-success"><i className="fa fa-check" aria-hidden="true"></i>{item.in_stock_status}</font>
              </Col>
              <Col sm={2} className='pt-4'>
                {/* <button className='btn border-0' onClick={() => handleAddToCart(product)}>+ Add to Cart</button> */}
                <button
                  className='btn btn-sm btn-danger rounded-1 main-bg'
                  style={{ padding: "0 5px", lineHeight: "20px" }}
                  onClick={() => handleAddToCart(item)}
                >
                  + Add to Cart
                </button>
                <button className='btn' onClick={() => handleRemoveWishList(item.product_id)}><i className="fa fa-times" aria-hidden="true"></i> </button>
              </Col>
            </Row>
          ))
        )}
      </Container>
    </>
  )
}

export default Wishlist
