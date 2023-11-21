import React from 'react'
import { Link } from 'react-router-dom'

const AboutSideBar = () => {
    return (
        <>
            <ul >
                <li>
                    <Link to="/about-us/history">History</Link>
                </li>
                <li>
                    <Link to='/about-us/mission/'>Mission</Link>
                </li>
                <li>
                    <Link to='/about-us/our-team/'>Our Team</Link>
                </li>
                <li>
                    <Link to='/about-us/who-we-work-with/'>Who We Work With</Link>
                </li>
                <li>
                    <Link to='/about-us/accounts '>Financials</Link>
                </li>
                <li>
                    <Link to='/about-us/policies/'>Policies</Link>
                </li>
                <li>
                    <Link to="/about-us/collaborations/">Collaborations</Link>
                </li>
            </ul>

        </>
    )
}

export default AboutSideBar