import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Image, Row, Col } from 'react-bootstrap'

const BlogCompoent = ({ imagePath, date, title, content, linkTo }) => {
    return (
        <div>

            <Link to={linkTo}>
                <div className='report-date-style'>
                    <Image src={require(`../../assets/images/${imagePath}`)} alt="muskaan ngo" className='w-100 blog-img' />
                    <span className="qodef-e-date-in-media entry-date published updated">
                        <h5 className="qodef-e-day text-white">{date.day}</h5>
                        <span className="qodef-e-month-year text-white">{date.monthYear}</span>
                    </span>
                    <h6 className='main-color pt-2'>{title}</h6>
                    <p className='text-secondary'>{content}</p>
                </div>
            </Link>

        </div>
    )
}

export default BlogCompoent


