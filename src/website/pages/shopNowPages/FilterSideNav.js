import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { fetch } from '../../../utils';
const FilterSideNav = ({ range, handleSliderChange, resetPriceRange }) => {
  const bestSeller = useSelector((state) => state.productsList.productList)
  console.log('bestSeller', bestSeller)

  const { category_slug } = useParams();
  const [categoryList, setCategoryList] = useState([]);
  // const cart = useSelector((state) => state.cart.items);


  const getCategryList = async () => {
    try {
      const response = await fetch(
        "/category/hierarchy",
        "get",
        null,
        null, // headers
      );
      setCategoryList(response.data.data.category);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCategryList();
  }, []);

  return (
    <>
      <h4>Filter</h4>
      <h6 className='f-w-6 main-color pt-1'>All CATEGORIES</h6>
      <ul>
        {categoryList.map(category => (
          <li key={`${category.category_id}-${category.sub_category_id}`} className='pt-1'>
            <b>  {category.category_name}</b>
            {category.sub_categorys && category.sub_categorys.length > 0 && (
              <ul>
                {category.sub_categorys.map(subCategory => (
                  <li key={subCategory.sub_category_id}>
                    <Link
                      to={`/product-category/${category.category_slug}/${subCategory.sub_category_slug}`}
                      className='text-dark'
                    >
                      {subCategory.sub_category_name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <hr />

      <h6 className='f-w-6 main-color pt-1 pb-1'>PRICE</h6>
      <Slider
        range
        min={0}
        max={100}
        value={range}
        onChange={handleSliderChange} y
      />
      <div className='pt-3'>
        <span className='pull-right'> <font className="pt-1 text-secondary">
          Price: &nbsp; <i className="fa fa-inr"></i> {range[0]} - {range[1]}
        </font></span>
        <span className='pull-left'> 
          <Button className='btn btn-sm' onClick={resetPriceRange}>Reset</Button> {/* Add the Reset button */}
        </span>
      </div>
      <div className="clearfix"></div>
      <div className='pt-4'>
        <hr />
        <h6 className='f-w-6 main-color pt-1 pb-1'> BEST  SELLERS !</h6>
        {bestSeller
          .filter(item => item.desktop_display === 1) // Filter products where desktop_display is 1
          .map((item, index) => (
            <>
              <Link to={`/product/${item.product_slug}`}>
                <Row className='py-2' key={index}>

                  <Col sm={3}>
                    <img src={item.product_thumbnail} alt="" className='w-100' />
                  </Col>
                  <Col sm={9}>
                    <p className='m-0 f-w-6 text-secondary'>{item.product_name}</p>
                    <span className='main-color'>  <i className="fa fa-inr"></i> {item.product_MSP}</span>
                  </Col>

                </Row>
              </Link>

            </>
          ))}

      </div>


    </>
  )
}

export default FilterSideNav;