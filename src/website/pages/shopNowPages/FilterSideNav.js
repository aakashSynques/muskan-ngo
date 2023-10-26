import React from 'react'
import Form from 'react-bootstrap/Form';


const FilterSideNav = () => {
  return (
    <div>
      <h6>CATEGORIES</h6>
      <ul className='px-1'>
        <li className='f-w-6 pt-1 pb-1'>Books</li>
        <ul>
          <li>
            English Graded Readers
          </li>
          <li>
            Padho Rakho Series
          </li>
          <li>
            Single Story Books
          </li>
          <li>
            Reports
          </li>
        </ul>
        <li>Handmade Products</li>
        <ul>
          <li>Diaries</li>
          <li>Masks and Scrunchies</li>
          <li>Soaps</li>
        </ul>
      </ul>

      <hr />
      <h6>PRICE</h6>
        
      <hr />
      <h6>BRANDS</h6>
      <ul>
        <li>Brand A</li>
        <li>Brand B</li>
        <li>Brand C</li>
        <li>Brand D</li>
      </ul>
    </div>
  )
}

export default FilterSideNav
