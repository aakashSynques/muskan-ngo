import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../reducers/cart';
import { fetch } from '../../../utils';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import FilterSideNav from './FilterSideNav';
import Sorting from '../../component/Sorting';

const SubCategory = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [range, setRange] = useState([0, 100]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { category_slug, subcategory_slug } = useParams();
    const [sortingOption, setSortingOption] = useState('price-low-to-high'); // Initial sorting option
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
            setProductList(response.data.data.product_list);
            setLoading(false);
        } catch (err) {
            console.log(err);
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
    };

    const handleSortChange = (e) => {
        const selectedOption = e.target.value;
        setSortingOption(selectedOption);
        // Sort the filtered products based on the selected sorting option
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

    console.log('productList', productList)
    useEffect(() => {
        setLoading(true);
        getProductList(category_slug, subcategory_slug);
    }, [category_slug, subcategory_slug]);

    // const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
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
            product_MSP: product.product_MSP,
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
            subTotal: product.product_MSP * 1, // Calculate the subtotal

        };
        dispatch(addToCart(cartItemData));
        console.log('Added to cart:', cartItemData);
    };

    return (
        <>
            <hr />
            <Container>
                <font> Home › {category_slug}</font>
                <Row className='pt-5'>
                    <Col sm={3} className='pe-5'>
                        <FilterSideNav
                            range={range}
                            handleSliderChange={handleSliderChange}
                            resetPriceRange={resetPriceRange}
                        />
                    </Col>
                    <Col sm={9} className='border-left  ps-4' style={{ borderLeft: "1px solid" }}>
                        <Row>
                            <Col sm={6}>
                                <h4 className="text-capitalize">{category_slug} </h4>
                            </Col>
                            <Col sm={6} className='text-end'>
                                <span className='font-14'>Sort by &nbsp; : &nbsp;
                                    <Sorting handleSortChange={handleSortChange} />
                                </span>
                            </Col>
                        </Row>

                        <Row sm={3} className='pt-3'>
                            {filteredProducts.map((product, index) => (
                                <Col className='pb-5' key={index}>
                                    {loading ? (
                                        <div className="text-center">
                                            <Spinner animation="border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </Spinner>
                                        </div>
                                    ) : (
                                        <div className='product-item'>
                                            <Link to={`/product/${product.product_slug}`}>
                                                <img src={product.product_thumbnail} alt="" className='w-100 image-height' />
                                            </Link>
                                            <p className='m-0 pt-2 f-w-6'>{product.product_name}</p>
                                            <span className='main-color'>
                                                <i className="fa fa-inr"></i>{product.product_MSP}
                                            </span>
                                            <br />
                                            <hr className='my-2' style={{ color: "gray" }} />
                                            <button className='btn border-0' onClick={() => handleAddToCart(product)}>+ Add to Cart</button>
                                        </div>
                                    )}
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SubCategory;
