import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'react-bootstrap';
import MyAccountSideBar from './MyAccoutSideBar';
import BillAddress from './BillAddress';
import { fetch } from '../../../../utils';
import ShippAddress from './ShippAddress';

const AddressBook = () => {
    const tokenDataFromLocalStorage = localStorage.getItem('muskan_token_data');
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;

    const [addressData, setAddressData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAddressData = async () => {
        try {
            const body = {
                customer_id: parsedTokenData.customer_id,
            };
            const response = await fetch('/customer/address', 'POST', body, null);
            setAddressData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getAddressData();
    }, []);

    console.log('addressData', addressData)

    const hasBillingAddress = addressData && addressData.bill_adderss;


    // State and function to control the visibility of the billing modal
    const [showBillingModal, setShowBillingModal] = useState(false);
    const handleShowBillingModal = () => {
        setShowBillingModal(true);
    };
    const handleCloseBillingModal = () => {
        setShowBillingModal(false);
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
                                <div className="mt-4 bg-light p-4 border">
                                    {hasBillingAddress ? (
                                        <>
                                            <h6 className=''>BILLING ADDRESS
                                                <font className='main-color' onClick={handleShowBillingModal} style={{ cursor: "pointer" }}>( Edit ) </font>
                                            </h6>
                                            <li> Name:  {hasBillingAddress.bill_fname}  {hasBillingAddress.bill_lname} </li>
                                            <li>Address: {hasBillingAddress.bill_adderss_one || ''} {hasBillingAddress.bill_adderss_two || ''}</li>
                                            <li> Company :  {hasBillingAddress.bill_company != ''}</li>
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
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Render the Billing Address modal */}
            <BillAddress show={showBillingModal} handleClose={handleCloseBillingModal} />

        </>
    );
};

export default AddressBook;
