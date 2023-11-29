// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, CardBody, CardHeader } from 'react-bootstrap';
// import MyAccountSideBar from './MyAccoutSideBar';
// import BillAddress from './BillAddress';
// import { fetch } from '../../../../utils';
// import ShippAddress from './ShippAddress';

// const AddressBook = () => {
//     const tokenDataFromLocalStorage = localStorage.getItem('muskan_token_data');
//     const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;
//     const [addressData, setAddressData] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [showBillingModal, setShowBillingModal] = useState(false);
//     const [showShippingModal, setShowShippingModal] = useState(false);
//     const getAddressData = async () => {
//         try {
//             const body = {
//                 customer_id: parsedTokenData.customer_id,
//             };
//             const response = await fetch('/customer/address', 'POST', body, null);
//             setAddressData(response.data.data);
//             setIsLoading(false);
//         } catch (error) {
//             setError(error);
//             setIsLoading(false);
//         }
//     };
//     useEffect(() => {
//         getAddressData();
//     }, []);

//     const hasBillingAddress = addressData && addressData.bill_adderss;
//     const hasShippingAddress = addressData && addressData.ship_adderss;

//     const handleShowBillingModal = () => {
//         setShowBillingModal(true);
//     };
//     const handleCloseBillingModal = () => {
//         setShowBillingModal(false);
//     };
//     const handleBillingAdd = async () => {
//         getAddressData();
//     };

//     // shipping
//     const handleShowShippingModal = () => {
//         setShowShippingModal(true);
//     };
//     const handleCloseShippingModal = () => {
//         setShowShippingModal(false);
//     };
//     const handleShippingAdd = async () => {
//         getAddressData();
//     };


//     return (
//         <>
//             <hr />
//             <Container>
//                 <font> Home › My Account › Address Book</font>
//                 <Row className="pt-5">
//                     <Col sm={3}>
//                         <MyAccountSideBar />
//                     </Col>
//                     <Col sm={9}>
//                         <Card>
//                             <CardHeader className="bg-light">
//                                 <b>Address Book</b>
//                             </CardHeader>
//                             <CardBody>
//                                 <font size="2">The following addresses will be used on the checkout page by default.</font>
//                                 <div className="mt-4 bg-light p-4 border">
//                                     {hasBillingAddress ? (
//                                         <>
//                                             <h6 className=''>BILLING ADDRESS
//                                                 <font className='main-color' onClick={handleShowBillingModal} style={{ cursor: "pointer" }}>( Edit ) </font>
//                                             </h6>
//                                             <li> Name:  {hasBillingAddress.bill_fname}  {hasBillingAddress.bill_lname} </li>
//                                             <li>Address: {hasBillingAddress.bill_adderss_one || ''} {hasBillingAddress.bill_adderss_two || ''}</li>
//                                             <li> Company :  {hasBillingAddress.bill_company || ''}</li>
//                                             <li> City :  {hasBillingAddress.bill_city || ''} , State :  {hasBillingAddress.bill_state || ''},      </li>
//                                             <li> Country :  {hasBillingAddress.bill_country || ''} , PinCode :  {hasBillingAddress.bill_pincode || ''},      </li>
//                                             <li> Phone :  {hasBillingAddress.bill_mobile || ''}</li>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <h6 className=''>BILLING ADDRESS
//                                                 <font className='main-color' onClick={handleShowBillingModal} style={{ cursor: "pointer" }}>( Add ) </font>
//                                             </h6>
//                                             <font size="2">You have not set up this type of address yet.</font>
//                                         </>
//                                     )}
//                                 </div>



//                                 <div className="mt-4 bg-light p-4 border">
//                                     {hasShippingAddress ? (
//                                         <>
//                                             <h6 className=''>SHIPPING ADDRESS
//                                                 <font className='main-color' onClick={handleShowShippingModal} style={{ cursor: "pointer" }}>( Edit ) </font>
//                                             </h6>
//                                             <li> Name:  {hasShippingAddress.ship_fname}  {hasShippingAddress.ship_lname} </li>
//                                             <li>Address: {hasShippingAddress.ship_adderss_one || ''} {hasShippingAddress.ship_adderss_two || ''}</li>
//                                             <li> Company :  {hasShippingAddress.ship_company || ''}</li>
//                                             <li> City :  {hasShippingAddress.ship_city || ''} , State :  {hasShippingAddress.ship_state || ''},      </li>
//                                             <li> Country :  {hasShippingAddress.ship_country || ''} , PinCode :  {hasShippingAddress.ship_pincode || ''},      </li>
//                                             <li> Phone :  {hasShippingAddress.ship_mobile || ''}</li>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <h6 className=''>SHIPPING ADDRESS
//                                                 <font className='main-color' onClick={handleShowShippingModal} style={{ cursor: "pointer" }}>( Add ) </font>
//                                             </h6>
//                                             <font size="2">You have not set up this type of address yet.</font>
//                                         </>
//                                     )}
//                                 </div>
//                             </CardBody>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>

//             {/* Render the Billing Address modal */}
//             <BillAddress show={showBillingModal} handleClose={handleCloseBillingModal} updateAddressData={handleBillingAdd} />
//             <ShippAddress show={showShippingModal} handleClose={handleCloseShippingModal} updateShipAddressData={handleShippingAdd} />

//         </>
//     );
// };

// export default AddressBook;





// AddressBook.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader, Spinner } from 'react-bootstrap';
import MyAccountSideBar from './MyAccoutSideBar';
import BillAddress from './BillAddress';
import ShippAddress from './ShippAddress';
import { fetch } from '../../../../utils';

const AddressBook = () => {
    const tokenDataFromLocalStorage = localStorage.getItem('muskan_token_data');
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;
    const [addressData, setAddressData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showBillingModal, setShowBillingModal] = useState(false);
    const [showShippingModal, setShowShippingModal] = useState(false);

    const getAddressData = async () => {
        try {
            setIsLoading(true); // Set loading state to true while fetching data
            const body = {
                customer_id: parsedTokenData.customer_id,
            };
            const response = await fetch('/customer/address', 'POST', body, null);
            setAddressData(response.data.data);
            setIsLoading(false); // Set loading state to false after data is fetched
        } catch (error) {
            setError(error);
            setIsLoading(false); // Set loading state to false even if an error occurs
        }
    };

    useEffect(() => {
        getAddressData();
    }, []);

    const hasBillingAddress = addressData && addressData.bill_adderss;
    const hasShippingAddress = addressData && addressData.ship_adderss;

    const handleShowBillingModal = () => {
        setShowBillingModal(true);
    };

    const handleCloseBillingModal = () => {
        setShowBillingModal(false);
    };

    const handleBillingAdd = async () => {
        getAddressData();
    };

    // shipping
    const handleShowShippingModal = () => {
        setShowShippingModal(true);
    };

    const handleCloseShippingModal = () => {
        setShowShippingModal(false);
    };

    const handleShippingAdd = async () => {
        getAddressData();
    };

    return (
        <>
            <hr />
            <Container>
                <font> Home › My Account › Address Book</font>
                <Row className="pt-5">
                    <Col sm={3}>
                        <MyAccountSideBar />
                    </Col>
                    <Col sm={9}>
                        <Card>
                            <CardHeader className="bg-light">
                                <b>Address Book</b>
                            </CardHeader>
                            <CardBody>
                                <font size="2">The following addresses will be used on the checkout page by default.</font>
                                {isLoading ? (
                                   <div className='mt-4'>
                                       <Spinner animation="border" role="status">
                                      <span className="sr-only">Loadding.....</span>
                                  </Spinner>
                                   </div>
                                ) : (
                                    <>
                                     <div className="mt-4 bg-light p-4 border">
                                    {hasBillingAddress ? (
                                        <>
                                            <h6 className=''>BILLING ADDRESS
                                                <font className='main-color' onClick={handleShowBillingModal} style={{ cursor: "pointer" }}>( Edit ) </font>
                                            </h6>
                                            <li> Name:  {hasBillingAddress.bill_fname}  {hasBillingAddress.bill_lname} </li>
                                            <li>Address: {hasBillingAddress.bill_adderss_one || ''} {hasBillingAddress.bill_adderss_two || ''}</li>
                                            <li> Company :  {hasBillingAddress.bill_company || ''}</li>
                                            <li> City :  {hasBillingAddress.bill_city || ''} , State :  {hasBillingAddress.bill_state || ''},      </li>
                                            <li> Country :  {hasBillingAddress.bill_country || ''} , PinCode :  {hasBillingAddress.bill_pincode || ''},      </li>
                                            <li> Phone :  {hasBillingAddress.bill_mobile || ''}</li>
                                        </>
                                    ) : (
                                        <>
                                            <h6 className=''>BILLING ADDRESS
                                                <font className='main-color' onClick={handleShowBillingModal} style={{ cursor: "pointer" }}>( Add ) </font>
                                            </h6>
                                            <font size="2">You have not set up this type of address yet.</font>
                                        </>
                                    )}
                                </div>



                                <div className="mt-4 bg-light p-4 border">
                                    {hasShippingAddress ? (
                                        <>
                                            <h6 className=''>SHIPPING ADDRESS
                                                <font className='main-color' onClick={handleShowShippingModal} style={{ cursor: "pointer" }}>( Edit ) </font>
                                            </h6>
                                            <li> Name:  {hasShippingAddress.ship_fname}  {hasShippingAddress.ship_lname} </li>
                                            <li>Address: {hasShippingAddress.ship_adderss_one || ''} {hasShippingAddress.ship_adderss_two || ''}</li>
                                            <li> Company :  {hasShippingAddress.ship_company || ''}</li>
                                            <li> City :  {hasShippingAddress.ship_city || ''} , State :  {hasShippingAddress.ship_state || ''},      </li>
                                            <li> Country :  {hasShippingAddress.ship_country || ''} , PinCode :  {hasShippingAddress.ship_pincode || ''},      </li>
                                            <li> Phone :  {hasShippingAddress.ship_mobile || ''}</li>
                                        </>
                                    ) : (
                                        <>
                                            <h6 className=''>SHIPPING ADDRESS
                                                <font className='main-color' onClick={handleShowShippingModal} style={{ cursor: "pointer" }}>( Add ) </font>
                                            </h6>
                                            <font size="2">You have not set up this type of address yet.</font>
                                        </>
                                    )}
                                </div>
                                    </>
                                )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Render the Billing Address modal */}
            <BillAddress show={showBillingModal} handleClose={handleCloseBillingModal} updateAddressData={handleBillingAdd} />

            {/* Render the Shipping Address modal */}
            <ShippAddress show={showShippingModal} handleClose={handleCloseShippingModal} updateShipAddressData={handleShippingAdd} />
        </>
    );
};

export default AddressBook;
