import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { setWishListDataCount } from '../../../reducers/wishlistSlice';
import { fetch } from '../../../utils'
import { addToCart, initializeCart } from '../../../reducers/cart';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import CartSidebar from '../../component/CartSidebar';


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
  // useEffect(() => {
  //   handleRemoveWishList();
  // }, []);



  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false); // State for cart sidebar visibility
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
      quantity: 1,
      subTotal: product.product_MSP,
    };
    dispatch(addToCart(cartItemData));
    handleRemoveWishList(product.product_id);

    openCartSidebar();
  };


  const openCartSidebar = () => {
    setIsCartSidebarOpen(true);
    // setIsOverlayActive(true);
  }
  const closeCartSidebar = () => {
    setIsCartSidebarOpen(false);
    // setIsOverlayActive(false);
  }

  return (
    <>
      <hr />
      <Container>
        <font> Home › WishList</font>
        <div className='mt-3 pb-3 text-center' > <h3>My Wishlist</h3> </div>
        <div className='mt-2 px-lg-5 px-sm-0'>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col" style={{ width: "8%" }}></th>
                <th scope="col">Product Name</th>
                <th scope="col">Unit Price</th>
                <th>Stock Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishListData.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center">No data found</td>
                </tr>
              ) : (
                wishListData.map((item, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td><img src={item.product_thumbnail} alt="" className='w-100' /></td>
                    <td>{item.product_name}</td>
                    <td className='main-color'><i className="fa fa-inr"></i> {item.product_MRP}</td>
                    <td className="text-success"><i className="fa fa-check" aria-hidden="true"></i>{item.in_stock_status}</td>
                    <td>
                      <button
                        className='btn btn-sm btn-danger rounded-1 main-bg'
                        style={{ padding: "0 5px", lineHeight: "20px" }}
                        onClick={() => handleAddToCart(item)}
                      >
                        + Add to Cart
                      </button>
                    </td>
                    <td>
                      <button className='btn' onClick={() => handleRemoveWishList(item.product_id)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>       
         </div>
      </Container>
      <CartSidebar isOpen={isCartSidebarOpen} closeSidebar={closeCartSidebar} />

    </>
  )
}

export default Wishlist
