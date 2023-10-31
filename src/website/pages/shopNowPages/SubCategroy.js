// import React, { useState, useEffect } from 'react';
// import { fetch } from '../../../utils';
// import { useParams, Link } from 'react-router-dom';
// import { Container, Row, Col, Spinner } from 'react-bootstrap';
// import FilterSideNav from './FilterSideNav';
// import Sorting from '../../component/Sorting';
// const SubCategory = () => {
//     const [productList, setProductList] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [range, setRange] = useState([0, 100]);
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const { category_slug } = useParams();
//     const [sortingOption, setSortingOption] = useState('price-low-to-high'); // Initial sorting option
//     const getProductList = async (newCategorySlug) => {
//         try {
//             const headers = { 'Content-Type': 'application/json' };
//             const body = {
//                 category_slug: newCategorySlug,
//             };
//             const response = await fetch(
//                 "/product/get-products-by-category",
//                 "POST",
//                 body,
//                 headers,
//             );
//             setProductList(response.data.data.product_list);
//             setLoading(false);
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     const handleSliderChange = (newRange) => {
//         setRange(newRange);
//     };

//     const filterProductsByPrice = () => {
//         const [minPrice, maxPrice] = range;
//         const filtered = productList.filter(
//             (product) => product.product_MSP >= minPrice && product.product_MSP <= maxPrice
//         );
//         setFilteredProducts(filtered);
//     };

//     const handleSortChange = (e) => {
//         const selectedOption = e.target.value;
//         setSortingOption(selectedOption);
//         // Sort the filtered products based on the selected sorting option
//         if (selectedOption === 'price-low-to-high') {
//             setFilteredProducts([...filteredProducts].sort((a, b) => a.product_MSP - b.product_MSP));
//         } else if (selectedOption === 'price-high-to-low') {
//             setFilteredProducts([...filteredProducts].sort((a, b) => b.product_MSP - a.product_MSP));
//         } else if (selectedOption === 'name-ascending') {
//             setFilteredProducts([...filteredProducts].sort((a, b) => a.product_name.localeCompare(b.product_name)));
//         } else if (selectedOption === 'name-descending') {
//             setFilteredProducts([...filteredProducts].sort((a, b) => b.product_name.localeCompare(a.product_name)));
//         }
//     };

//     const resetPriceRange = () => {
//         setRange([0, 100]);
//     };

//     useEffect(() => {
//         filterProductsByPrice();
//     }, [range, productList]);

//     useEffect(() => {
//         setLoading(true);
//         getProductList(category_slug);
//     }, [category_slug]);

//     return (
//         <>
//             <hr />
//             <Container style={{ height: "100vh" }}>
//                 <font> Home › {category_slug}</font>
//                 <Row className='pt-5'>
//                     <Col sm={3} className='pe-5'>
//                         <FilterSideNav
//                             range={range}
//                             handleSliderChange={handleSliderChange}
//                             resetPriceRange={resetPriceRange}
//                         />
//                     </Col>
//                     <Col sm={9} className='border-left  ps-4' style={{ borderLeft: "1px solid" }}>
//                         <Row>
//                             <Col sm={6}>
//                                 <h4 className="text-capitalize">{category_slug} </h4>
//                             </Col>
//                             <Col sm={6} className='text-end'>


//                                 <span className='font-14'>Sort by &nbsp; : &nbsp;
//                                     <Sorting handleSortChange={handleSortChange} />
//                                 </span>
//                             </Col>
//                         </Row>

//                         <Row sm={3} className='pt-3'>
//                             {filteredProducts.map((product, index) => (
//                                 <Col className='pb-5' key={index}>
//                                     {loading ? (
//                                         <div className="text-center">
//                                             <Spinner animation="border" role="status">
//                                                 <span className="sr-only">Loading...</span>
//                                             </Spinner>
//                                         </div>
//                                     ) : (
//                                         <div className='product-item'>
//                                             <Link to={`/product/${product.product_slug}`}>
//                                                 <img src={product.product_thumbnail} alt="" className='w-100 image-height' />
//                                             </Link>
//                                             <p className='m-0 pt-2 f-w-6'>{product.product_name}</p>
//                                             <span className='main-color'>
//                                                 <i className="fa fa-inr"></i>{product.product_MSP}
//                                             </span>
//                                             <br />
//                                             <hr className='my-2' style={{ color: "gray" }} />
//                                             <font>
//                                                 <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
//                                                 <span className='pull-right'><i className="fa fa-heart-o" aria-hidden="true"></i></span>
//                                             </font>
//                                         </div>
//                                     )}
//                                 </Col>
//                             ))}
//                         </Row>

//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     )
// }
// export default SubCategory;


import React, { useState, useEffect } from 'react';
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
    const { category_slug } = useParams();
    const [sortingOption, setSortingOption] = useState('price-low-to-high');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;



    const getProductList = async (newCategorySlug) => {
        try {
            const headers = { 'Content-Type': 'application/json' };
            const body = {
                category_slug: newCategorySlug,
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
    };



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
        getProductList(category_slug);
    }, [category_slug]);

    const paginateProducts = (productList, currentPage, productsPerPage) => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return productList.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const paginatedProducts = paginateProducts(filteredProducts, currentPage, productsPerPage);

    return (
        <>
            <hr />
            <Container style={{ height: "100vh" }}>
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
                            {paginatedProducts.map((product, index) => (
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
                                            <font>
                                                <span className='pull-left'><a href='#' className='font-14 text-dark'>+ Add To Cart</a></span>
                                                <span className='pull-right'><i className="fa fa-heart-o" aria-hidden="true"></i></span>
                                            </font>
                                        </div>
                                    )}
                                </Col>
                            ))}
                        </Row>
                        <div className="text-end mt-4">
                            <button
                                className="btn btn-primary me-2"
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default SubCategory;
