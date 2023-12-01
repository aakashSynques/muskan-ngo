import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Badge, Row, Col } from 'react-bootstrap';
import logo from '../../Muskaan-logo.png';
import HeaderTop from './HeaderTop';
import { Link } from 'react-router-dom';
import { fetch } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import CartSidebar from '../component/CartSidebar';
const MainHeader = () => {
    const cart = useSelector((state) => state.cart.items);
    const [active, setActive] = useState("home");
    const wishlistData = useSelector((state) => state.wishlistData);
    const [categoryList, setCategoryList] = useState([]);
    const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false); // State for cart sidebar visibility
    const [isOverlayActive, setIsOverlayActive] = useState(false); // State for overlay visibility
    const getCategryList = async () => {
        try {
            const response = await fetch("/category/hierarchy", "get", null, null);
            setCategoryList(response.data.data.category);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCategryList();
    }, []);

    const openCartSidebar = () => {
        setIsCartSidebarOpen(true);
        setIsOverlayActive(true);
    }
    const closeCartSidebar = () => {
        setIsCartSidebarOpen(false);
        setIsOverlayActive(false);
    }
    return (

        <>
            <HeaderTop />
            <div className={`overlay ${isOverlayActive ? 'active' : ''}`} onClick={closeCartSidebar}></div>
            <section className='navigation'>
                <Navbar collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand className="" href="/">
                            <img src={logo} alt="Logo" className="logo-width" />
                        </Navbar.Brand>

                        {/* <Nav class="d-block d-lg-none">
                                <Nav.Item className='px-1 pt-1'>
                                    <Link to="/wishlist" className='nav-link pt-2 px-1 whishlist-nav'>
                                        <Badge bg="danger" className='rounded-5'>{wishlistData.wishListDataCount.length}</Badge>
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className='px-2 pt-1'>
                                    <Link className='nav-link pt-2 px-1 whishlist-nav' onClick={openCartSidebar}>
                                        <Badge bg="danger" className='rounded-5'>{cart.length}</Badge>
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className='px-1 pt-1'>
                                    <Link to="/account/login" className='nav-link pt-2 px-1 whishlist-nav'>
                                        <i className="fa fa-user-o px-2" aria-hidden="true"></i>
                                    </Link>
                                </Nav.Item>
                            </Nav> */}

                        <div className='d-inline-flex d-lg-none ms-auto'>
                            <Nav.Item className='px-1 pt-1'>
                                <Link to="/wishlist" className='nav-link pt-2 px-1 whishlist-nav'>
                                    <Badge bg="danger" className='rounded-5'>{wishlistData.wishListDataCount.length}</Badge>
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className='px-2 pt-1'>
                                <Link className='nav-link pt-2 px-1 whishlist-nav' onClick={openCartSidebar}>
                                    <Badge bg="danger" className='rounded-5'>{cart.length}</Badge>
                                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className='px-1 pt-1'>
                                <Link to="/account/login" className='nav-link pt-2 px-1 whishlist-nav'>
                                    <i className="fa fa-user-o px-2" aria-hidden="true"></i>
                                </Link>
                            </Nav.Item>
                        </div>


                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto" activeKey={active}
                                onSelect={(selectedKey) => setActive(selectedKey)}>

                                <Nav.Item>
                                    <Nav.Link eventKey="home" as={Link} to="/">
                                        Home
                                    </Nav.Link>
                                </Nav.Item>

                                <NavDropdown title="About Us" id="basic-nav-dropdown" className="custom-dropdown">
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="history" as={Link} to="/about-us/history" className='py-0'>
                                            History
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/mission/" className='py-0'>
                                            Mission
                                        </Nav.Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/our-team/" className='py-0'>
                                            Our Team
                                        </Nav.Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/who-we-work-with/" className='py-0'>
                                            Who we work with
                                        </Nav.Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/financial/" className='py-0'>
                                            Financials
                                        </Nav.Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/policies/" className='py-0'>
                                            Policies
                                        </Nav.Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/about-us/collaborations/" className='py-0'>
                                            Collaborations
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>



                                <NavDropdown title="Work" id="basic-nav-dropdown" className="custom-dropdown">
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/work/education" className='py-0'>
                                            Education
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/work/empowering-children-and-youth" className='py-0'>
                                            Empowering Children and Youth
                                        </Nav.Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/work/issues-of-dignity-and-survival " className='py-0'>
                                            Issues of Dignity and Survival
                                        </Nav.Link>
                                    </NavDropdown.Item>

                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="liveLihoods" as={Link} to="/work/liveLihoods" className='py-0'>
                                            Livelihoods
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="sustainable-living" as={Link} to="/work/sustainable-living" className='py-0'>
                                            Sustainable Living
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className='rounded-0'>
                                        <Nav.Link eventKey="education" as={Link} to="/work/publication" className='py-0'>
                                            Publications
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Item>
                                    <Nav.Link eventKey="communicable" as={Link} to="/communicable">
                                        Communicables
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="connect" as={Link} to="/connect">
                                        Connect
                                    </Nav.Link>
                                </Nav.Item>

                                <NavDropdown title="Shop Now" id="basic-nav-dropdown">
                                    {categoryList.map((category, index) => (
                                        <NavDropdown.Item key={index}>
                                            <Nav.Link eventKey="categroy" className='py-1' as={Link} to={`/${category.category_slug}`}>
                                                {category.category_name}
                                            </Nav.Link>
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            </Nav>


                            <Nav className='d-none d-lg-inline-flex'>
                                <Nav.Item className='px-1 pt-1'>
                                    <Link to="/wishlist" className='nav-link pt-2 px-1 whishlist-nav'>
                                        <Badge bg="danger" className='rounded-5'>{wishlistData.wishListDataCount.length}</Badge>
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className='px-2 pt-1'>
                                    <Link className='nav-link pt-2 px-1 whishlist-nav' onClick={openCartSidebar}>
                                        <Badge bg="danger" className='rounded-5'>{cart.length}</Badge>
                                        <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className='px-1 pt-1'>
                                    <Link to="/account/login" className='nav-link pt-2 px-1 whishlist-nav'>
                                        <i className="fa fa-user-o px-2" aria-hidden="true"></i>
                                    </Link>
                                </Nav.Item>
                            </Nav>





                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>

            <CartSidebar isOpen={isCartSidebarOpen} closeSidebar={closeCartSidebar} />
        </>
    );
}

export default MainHeader;

