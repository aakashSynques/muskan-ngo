import React from 'react'

const Sorting = ({ handleSortChange }) => {
    return (
        <>
            <select onChange={handleSortChange} className='px-2 rounded-1 border font-14' >
                <option value="default">Default Shorting</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
                <option value="name-ascending">Name: A to Z</option>
                <option value="name-descending">Name: Z to A</option>
            </select></>
    )
}

export default Sorting
