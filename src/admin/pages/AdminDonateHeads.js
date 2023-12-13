


import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Form, Modal } from "react-bootstrap";
import { fetch } from "../../utils";
import { Table } from "ka-table";
import "ka-table/style.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaClipboardList } from "react-icons/fa";

const bootstrapChildComponents = {
    table: {
        elementAttributes: () => ({
            className: "table table-striped table-hover table-bordered ",
        }),
    },
    tableHead: {
        elementAttributes: () => ({
            className: "thead-dark",
        }),
    },
    noDataRow: {
        content: () => "No Data Found",
    },
};

const AdminDonateHeads = () => {
    const [searchText, setSearchText] = useState("");
    const [searchTextTwo, setSearchTextTwo] = useState("");
    const [show, setShow] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [donateHeadsData, setDonateHeadsData] = useState({
        list: [],
        loading: false,
    });

    const [attributeValueData, setAttributeValueData] = useState({
        attribute_id: 0,
        list: [],
        loading: false,
    });

    const [formLoading, setFormLoading] = useState(false);
    const [formMessage, setFormMessage] = useState(null);

    const [formLoading2, setFormLoading2] = useState(false);
    const [formMessage2, setFormMessage2] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setFormMessage(null);
        reset();
    };

    const handleCloseTwo = () => setShowTwo(false);
    const handleShowTwo = () => {
        setShowTwo(true);
        setFormMessage2(null);
        reset2();
    };


    const schema = z.object({
        head_name: z
            .string()
            .min(1, { message: "heads name is required." }),


        head_amount: z
            .string()
            .min(1, { message: "heads amount type is required." }),

        head_description: z
            .string()
            .min(1, { message: "heads description is required." }),
    });

    const schema2 = z.object({
        attribute_value: z
            .string()
            .min(1, { message: "attribute value is required." }),
        attribute_type: z
            .string()
            .min(1, { message: "attribute type type is required." }),
        attribute_value_description: z
            .string()
            .min(1, { message: "attribute value description is required." }),
    });

    const {
        register: register2,
        handleSubmit: handleSubmit2,
        formState: { errors: errors2 },
        reset: reset2,
    } = useForm({
        defaultValues: {
            attribute_value: "",
            attribute_type: "text",
            attribute_value_description: "",
        },
        resolver: zodResolver(schema2),
    });


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            attribute_name: "",
            attribute_value_type: "text" /* attribute_description: "" */,
        },
        resolver: zodResolver(schema),
    });



    const onSubmit = async (data) => {
        try {
            setFormLoading(true);
            setFormMessage(
                <font color="blue">
                    <b>Loading....</b>
                </font>
            );
            const response = await fetch("donation/add-head", "POST", data, null);
            if (response.status === 201) {
                const { success, message } = response.data;
                if (success === true) {
                    setFormMessage(
                        <font color="green">
                            <b>{message}</b>
                        </font>
                    );
                    reset();
                    getDonateHeadsList();
                    return true;
                }
            }
            setFormMessage(
                <font color="red">
                    <b>{response.message}</b>
                </font>
            );
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setFormMessage(<font color="red"><b>{error.response.data.message}</b></font>);
            } else if (error && error.message) {
                setFormMessage(<font color="red"><b>{error.message}</b></font>);
            } else {
                setFormMessage(<font color="red"><b>Something went wrong.</b></font>);
            }
        } finally {
            setFormLoading(false);
        }
    };







    const getDonateHeadsList = async () => {
        try {
            setDonateHeadsData((prev) => ({ list: [], loading: true }));
            const response = await fetch("donation/heads", "GET", null, null);

            if (response.status === 200) {
                const { success, data } = response.data;
                console.log('donateHeadsData', response.data)
                if (success === true) {
                    const donateHeads_list = data.headList;
                    const tableData = await donateHeads_list.map((heads, index) => {
                        return {
                            id: index + 1,
                            head_name: heads.head_name,
                            head_amount: heads.head_amount,
                            head_description: heads.head_description,
                            // attribute_value: attribute.attribute_id,
                            display_status: {
                                display_status: heads.display_status,
                                master_donation_id: heads.master_donation_id,
                            },
                        };
                    });
                    setDonateHeadsData({ list: tableData, loading: false });
                }
            }
        } catch (error) {
            setDonateHeadsData({ list: [], loading: false });
        } finally {
            setDonateHeadsData((prev) => ({ list: prev.list, loading: false }));
        }
    };
    useEffect(() => {
        getDonateHeadsList();
    }, []);




    const setHeadsDisplayStatus = async (master_donation_id, display_status) => {
        try {
            const response = await fetch(
                "donation/update-heads-dispaly-status",
                "POST",
                {
                    master_donation_id: master_donation_id,
                    display_status: display_status ? 0 : 1,
                },
                null
            );

            if (response.status === 200) {
                const { success } = response.data;
                if (success === true) {
                    getDonateHeadsList();
                }
            }
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                alert(error.response.data.message);
            } else if (error.message) {
                alert(error.message);
            } else {
                alert("Something went wrong.");
            }
        }
    };


    return (
        <div className="container-fluid">
            <Breadcrumb className="p-2">
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item active>Donate</Breadcrumb.Item>
            </Breadcrumb>

            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Donate Heads</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Heads Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Heads Name"
                                autoFocus
                                {...register("head_name")}
                                isInvalid={!!errors.head_name?.message}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.head_name?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Heads Amount</Form.Label>
                            <Form.Control
                                type="number"
                                min='0'
                                placeholder="Enter Heads Name"
                                autoFocus
                                {...register("head_amount")}
                                isInvalid={!!errors.head_amount?.message}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.head_amount?.message}
                            </Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Heads Description</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                min='0'
                                placeholder="Description"
                                autoFocus
                                {...register("head_description")}
                                isInvalid={!!errors.head_description?.message}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.head_description?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                    </Form>


                    <Form.Control
                        type="text"
                        hidden={true}
                        placeholder="Enter Attribute Value Type"
                        autoFocus
                        {...register("attribute_value_type")}
                        isInvalid={!!errors.attribute_value_type?.message}
                    />
                    <div className="text-center">{formMessage ? formMessage : ""}</div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} size="sm">
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleSubmit(onSubmit)}
                        disabled={formLoading}
                        size="sm"
                    >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Modal */}




            <section className="content">
                <div className="container-fluid">
                    <Card>
                        <Card.Header>
                            <h4>
                                Donate Heads
                                <button
                                    className="btn btn-sm btn-primary pull-right"
                                    onClick={handleShow}
                                >
                                    Add
                                </button>
                            </h4>
                        </Card.Header>
                        <Card.Body>
                            <div className="row">
                                <div className="co-sm-12">
                                    <input
                                        type="search"
                                        value={searchText}
                                        onChange={(event) => {
                                            setSearchText(event.currentTarget.value);
                                        }}
                                        className="top-element pull-right m-2"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <Table
                                        loading={{
                                            enabled: donateHeadsData.loading,
                                            text: "Loading data",
                                        }}
                                        columns={[
                                            {
                                                key: "id",
                                                title: "Sr.No.",
                                                width: "5%",
                                            },
                                            {
                                                key: "head_name",
                                                title: "Heads Name",
                                                width: "40%",
                                            },

                                            {
                                                key: "head_description",
                                                title: "Description",
                                                width: "40%",
                                            },

                                            {
                                                key: "head_amount",
                                                title: "Heads Amount",
                                                width: "15%",
                                            },

                                            {
                                                key: "display_status",
                                                title: "Active",
                                                style: { textAlign: "center" },
                                                width: "10%",
                                            },

                                        ]}


                                        format={({ column, value }) => {
                                            if (column.key === "id") {
                                                return `${value}.`;
                                            }
                                            if (column.key === "display_status") {
                                                return (
                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch"
                                                        checked={value.display_status ? true : false}
                                                        onChange={() => {
                                                            setHeadsDisplayStatus(
                                                                value.master_donation_id,
                                                                value.display_status ? true : false
                                                            );
                                                        }}
                                                    />
                                                );
                                            }
                                        }}
                                        data={donateHeadsData.list}
                                        search={({
                                            searchText: searchTextValue,
                                            rowData,
                                            column,
                                        }) => {
                                            if (column.key === "passed") {
                                                return (
                                                    (searchTextValue === "false" && !rowData.passed) ||
                                                    (searchTextValue === "true" && rowData.passed)
                                                );
                                            }
                                        }}
                                        rowKeyField={"id"}
                                        searchText={searchText}
                                        noData={{
                                            text: "No Data Found",
                                        }}
                                        childComponents={bootstrapChildComponents}
                                   />
                                </div>
                            </div>


                        </Card.Body>
                        <Card.Footer></Card.Footer>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default AdminDonateHeads;
