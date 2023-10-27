import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetch } from '../../../utils';
const FilterSideNav = () => {
  const [categoryList, setCategoryList] = useState([]);
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
      console.log(err)
    }
  }
  useEffect(() => {
    getCategryList();
  }, []);


  return (
    <div>
      <h6 className='f-w-6 main-color'>CATEGORIES</h6>
      <ul>
        {categoryList.map(category => (
          <li key={category.category_id} className='pt-2'>
            {category.category_name}
            {category.sub_categorys && category.sub_categorys.length > 0 && (
              <ul>
                {category.sub_categorys.map(subCategory => (
                  <li key={subCategory.category_id}>
                    <Link to="/details" className='text-dark'>{subCategory.category_name}</Link>                    
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <hr />

    </div>
  )
}

export default FilterSideNav
