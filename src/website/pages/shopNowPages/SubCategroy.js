import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, initializeCart } from '../../../reducers/cart';
import { setProductListData } from '../../../reducers/productSlice';
import { fetch } from '../../../utils';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import FilterSideNav from './FilterSideNav';
import Sorting from '../../component/Sorting';
import CartSidebar from '../../component/CartSidebar';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


const SubCategory = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isInitialLoading, setInitialLoading] = useState(true); // Add isInitialLoading state
    const [range, setRange] = useState([0, 500]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { category_slug, subcategory_slug } = useParams();
    const [sortingOption, setSortingOption] = useState('price-low-to-high');

    const tokenDataFromLocalStorage = localStorage.getItem('muskan_token_data');
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;
    console.log('parsedTokenData', parsedTokenData)

    const getProductList = async (newCategorySlug, subCategorySlug) => {
        try {
            const headers = { 'Content-Type': 'application/json' };
            const body = {
                category_slug: newCategorySlug,
                sub_category_slug: subCategorySlug,
            };
            const response = await fetch(
                "/product/get-products-by-category",
                "POST",
                body,
                headers,
            );
            console.log('response', response)
            setProductList(response.data.data.product_list);
            dispatch(setProductListData(response.data.data.product_list));
            setLoading(false);
        } catch (err) {
            console.log(err);
        } finally {
            setInitialLoading(false); // Set isInitialLoading to false after data is fetched
        }
    }

    const handleSliderChange = (newRange) => {
        setRange(newRange);
    };

    const filterProductsByPrice = () => {
        const [minPrice, maxPrice] = range;
        const filtered = productList.filter(
            (product) => product.product_MSP >= minPrice && product.product_MSP <= maxPrice
        );
        setFilteredProducts(filtered);
        // setFilteredProducts(productList);
    };


    const handleSortChange = (e) => {
        const selectedOption = e.target.value;
        setSortingOption(selectedOption);
        if (selectedOption === 'price-low-to-high') {
            setFilteredProducts([...filteredProducts].sort((a, b) => a.product_MSP - b.product_MSP));
        } else if (selectedOption === 'price-high-to-low') {
            setFilteredProducts([...filteredProducts].sort((a, b) => b.product_MSP - a.product_MSP));
        } else if (selectedOption === 'name-ascending') {
            setFilteredProducts([...filteredProducts].sort((a, b) => a.product_name.localeCompare(b.product_name)));
        } else if (selectedOption === 'name-descending') {
            setFilteredProducts([...filteredProducts].sort((a, b) => b.product_name.localeCompare(a.product_name)));
        }
    };



    const resetPriceRange = () => {
        setRange([0, 100]);
    };
    useEffect(() => {
        filterProductsByPrice();
    }, [range, productList]);

    useEffect(() => {
        setLoading(true);
        getProductList(category_slug, subcategory_slug);
    }, [category_slug, subcategory_slug]);


    const handleAddWhishList = async (productId) => {
        try {
            // Check if the user is logged in
            if (!parsedTokenData) {
                // User is not logged in, handle accordingly (e.g., show a login prompt)
                // console.log('User is not logged in. Show login prompt or handle accordingly.');
                navigate('/account/login');
                return;
            }


            const token = localStorage.getItem("muskan_token");
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            };
            const body = {
                product_id: productId,
            };
            const response = await fetch(
                "/wishlist/add",
                "POST",
                body,
                headers,
            );
            if (response.data && response.data.success) {
                // alert(response.data.message);
                toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT });

            } else {
                console.log('Response not successful:', response);
            }
            setLoading(false);
        } catch (err) {
            console.log(err);
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
            categroy_name: subcategory_slug,
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
        console.log('cart ', dispatch(addToCart(cartItemData)))
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

            {isInitialLoading ? ( // Render a loading spinner or message while data is being fetched
                <div className="text-center pt-5" style={{ height: "80vh" }}>
                    <Spinner animation="border" variant="secondary" />
                </div>
            ) : (
                <>
                    <Container>
                        <font> <Link to='/' className='text-dark'> Home </Link> › {category_slug}</font>
                        <Row className='pt-5'>
                            <Col sm={3} className='lg-pe-5 md-sm-0'>
                                <FilterSideNav
                                    range={range}
                                    handleSliderChange={handleSliderChange}
                                    resetPriceRange={resetPriceRange}
                                />
                            </Col>
                            <Col sm={9} className='border-left  lg-ps-4 md-ps-0' style={{ borderLeft: "1px solid" }}>
                                <Row>
                                    <Col sm={6} className=''>
                                        <h5 className="text-capitalize">
                                            {category_slug}  {subcategory_slug}
                                        </h5>
                                    </Col>
                                    <Col sm={6} className='text-end'>
                                        <span className='font-14'>Sort by &nbsp; : &nbsp;
                                            <Sorting handleSortChange={handleSortChange} />
                                        </span>
                                    </Col>
                                </Row>


                                <Row sm={1} lg={3} xs={1} className='pt-3'>
                                    {filteredProducts.map((product, index) => (
                                        <Col className='pb-5' key={index}>
                                            <div className='product-item' style={{ height: "200px" }}>
                                                {loading ? (
                                                    <div className="text-center pt-5">
                                                        <Spinner animation="border" variant="secondery" />
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Link to={`/${product.category_slug}/${product.sub_category_slug}/${product.product_slug}`}>
                                                            <img src={product.product_thumbnail} alt="" className='w-100 image-height' />
                                                        </Link>
                                                        <p className='m-0 pt-2 f-w-6'>{product.product_name}</p>
                                                        <span className='main-color'>
                                                            <i className="fa fa-inr"></i>{product.product_MSP}
                                                        </span>
                                                        <br />
                                                        <hr className='my-2' style={{ color: "gray" }} />
                                                        <button className='btn border-0' onClick={() => handleAddToCart(product)}>+ Add to Cart</button>

                                                        <button className='btn pull-right' onClick={() => handleAddWhishList(product.product_id)}>
                                                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                        </button>

                                                    </>
                                                )}
                                            </div>
                                        </Col>
                                    ))}

                                </Row>
                                {/* {productList.map((item, index) => (
                            <h2>{index + 1} {item.product_name}</h2>
                        ))} */}


                            </Col>
                        </Row>
                    </Container>

                    <CartSidebar isOpen={isCartSidebarOpen} closeSidebar={closeCartSidebar} />
                </>
            )}
                  <ToastContainer />

        </>
    )
}

export default SubCategory;
