import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom';
import FilterSideNav from './FilterSideNav';
import { fetch } from '../../../utils';
import Sorting from '../../component/Sorting';
const ProductPage = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading
    const [range, setRange] = useState([0, 100]); // Define range state
    const [filteredProducts, setFilteredProducts] = useState([]); // Define filteredProducts state
    const { category_slug, subcategory_slug } = useParams();
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
            console.log('sub cat', response.data.data.product_list)
            setLoading(false); // Set loading to false when data is fetched
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        setLoading(true);
        getProductList(category_slug, subcategory_slug);
    }, [category_slug, subcategory_slug]);
    
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
    useEffect(() => {
        filterProductsByPrice();
    }, [range, productList]); 
    const resetPriceRange = () => {
        setRange([0, 100]);
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
    const [sortingOption, setSortingOption] = useState('price-low-to-high'); // Initial sorting option
    return (
        <>
            <hr />
            <Container className='py-2' style={{ height: "100vh" }}>
                <font> Home › {category_slug} / {subcategory_slug}</font>
                <Row className='pt-5'>
                    <Col sm={3} className='pe-5'>
                        <FilterSideNav
                            range={range}
                            handleSliderChange={handleSliderChange}
                            resetPriceRange={resetPriceRange} // Pass the reset function
                        />
                    </Col>
                    <Col sm={9} className='border-left  ps-4' style={{ borderLeft: "1px solid" }}>
                        <Row>
                            <Col sm={8}>
                                <h4 className="text-capitalize">{category_slug} / {subcategory_slug} </h4>
                            </Col>
                            <Col sm={4} className='text-end'>
                                <span className='font-14'>Sort by &nbsp; : &nbsp;
                                    <Sorting handleSortChange={handleSortChange} />
                                </span>
                            </Col>
                        </Row>
                        <Row className='pt-3'>
                            {filteredProducts.map((product, index) => (
                                <Col sm={4} className='pb-5' key={index}>
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
                                            <font>
                                                <span className='pull-left'>
                                                    <a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                                <span className='pull-right'><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                            </font>
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
export default ProductPage
