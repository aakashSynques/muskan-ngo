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
            console.log('response', response)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getAddressData();
    }, []);

    

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

                                {/* <div className="mt-4 bg-light p-4 border">
                                    <BillAddress />
                                    {isLoading ? (
                                        <div>Loading...</div>
                                    ) : addressData && addressData.bill_adderss.bill_fname ? (
                                        <>
                                            <b className="text-uppercase">{addressData.bill_adderss.bill_fname}</b> <br />
                                            <p>
                                                {addressData.bill_adderss.bill_fname} {addressData.bill_adderss.bill_lname},
                                                {addressData.bill_adderss.bill_address_one}
                                                {addressData.bill_adderss.bill_address_two || ''},
                                                {addressData.bill_adderss.bill_company}, {addressData.bill_adderss.bill_city},
                                                {addressData.bill_adderss.bill_country}, {addressData.bill_adderss.bill_state},
                                                {addressData.bill_pincode} <br />
                                                Mobile No: <b>{addressData.bill_adderss.bill_mobile}</b>
                                            </p>
                                        </>
                                    ) : (
                                        <font size="2">You have not set up this type of address yet.</font>
                                    )}
                                </div>

                                <div className="mt-4 bg-light p-4 border">

                                    <ShippAddress />
                                    {isLoading ? (
                                        <div>Loading...</div>
                                    ) : addressData && addressData.ship_adderss.ship_fname ? (
                                        <>
                                            <b className="text-uppercase">{addressData.ship_adderss.ship_fname}</b> <br />
                                            <p>
                                                {addressData.ship_adderss.ship_fname} {addressData.ship_adderss.ship_lname},
                                                {addressData.ship_adderss.ship_address_one}
                                                {addressData.ship_adderss.ship_address_two || ''},
                                                {addressData.ship_adderss.ship_company}, {addressData.ship_adderss.ship_city},
                                                {addressData.ship_adderss.ship_country}, {addressData.ship_adderss.ship_state},
                                                {addressData.ship_adderss.ship_pincode} <br />
                                                Mobile No: <b>{addressData.ship_adderss.ship_mobile}</b>
                                            </p>
                                        </>
                                    ) : (
                                        <font size="2">You have not set up this type of address yet.</font>
                                    )}
                                </div> */}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddressBook;
