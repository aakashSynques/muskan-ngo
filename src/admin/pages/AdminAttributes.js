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

const AdminAttributes = () => {
  const [searchText, setSearchText] = useState("");
  const [searchTextTwo, setSearchTextTwo] = useState("");
  const [show, setShow] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [attributeData, setAttributeData] = useState({
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
    attribute_name: z
      .string()
      .min(1, { message: "attribute name is required." }),
    attribute_value_type: z
      .string()
      .min(1, { message: "attribute value type is required." }),
    // attribute_description: z
    //   .string()
    //   .min(1, { message: "attribute description is required." }),
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

  const addAttributeValue = async (data) => {
    try {
      setFormLoading2(true);
      setFormMessage2(<font color="blue"><b>Loading....</b></font>);
      const response = await fetch("attribute-value/add", "POST", {...data, attribute_id: attributeValueData.attribute_id }, null);
      if (response.status === 201) {
        const { success, message } = response.data;
        if (success === true) {
          setFormMessage2(
            <font color="green">
              <b>{message}</b>
            </font>
          );
          reset2();
          getAttributeValueList(attributeValueData.attribute_id);
          return true;
        }
      }

    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setFormMessage2(<font color="red"><b>{error.response.data.message}</b></font>);
      } else if (error && error.message) {
        setFormMessage2(<font color="red"><b>{error.message}</b></font>);
      } else {
        setFormMessage2(<font color="red"><b>Something went wrong.</b></font>);
      }
    } finally {
      setFormLoading2(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setFormLoading(true);
      setFormMessage(
        <font color="blue">
          <b>Loading....</b>
        </font>
      );
      const response = await fetch("attribute/add", "POST", data, null);
      if (response.status === 201) {
        const { success, message } = response.data;
        if (success === true) {
          setFormMessage(
            <font color="green">
              <b>{message}</b>
            </font>
          );
          reset();
          getAttributeList();
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

  const getAttributeList = async () => {
    try {
      setAttributeData((prev) => ({ list: [], loading: true }));
      const response = await fetch("attribute/all", "GET", null, null);
      if (response.status === 200) {
        const { success, data } = response.data;
        if (success === true) {
          const attribute_list = data.attribute_list;
          const tableData = await attribute_list.map((attribute, index) => {
            return {
              id: index + 1,
              attribute_name: attribute.attribute_name,
              attribute_value_type: attribute.attribute_value_type,
              attribute_description: attribute.attribute_description,
              attribute_value: attribute.attribute_id,
            };
          });
          setAttributeData({ list: tableData, loading: false });
        }
      }
    } catch (error) {
      setAttributeData({ list: [], loading: false });
    } finally {
      setAttributeData((prev) => ({ list: prev.list, loading: false }));
    }
  };

  const getAttributeValueList = async (attribute_id) => {
    setAttributeValueData({ attribute_id, list: [], loading: true });
    try {
      setAttributeValueData({ attribute_id, list: [], loading: true });
      const response = await fetch(
        `/attribute-value/by-attr/${attribute_id}`,
        "GET",
        null,
        null
      );
      if (response.status === 200) {
        const { success, data } = response.data;
        if (success === true) {
          const attribute_value_list = data.attribute_value_list;
          const tableData = await attribute_value_list.map(
            (attribute_value, index) => {
              return {
                id: index + 1,
                attribute_value: attribute_value.attribute_value,
                attribute_value_type: attribute_value.attribute_value_type,
                attribute_value_description:
                  attribute_value.attribute_value_description,
                attribute_value_id: attribute_value.attribute_value_id,
              };
            }
          );
          setAttributeValueData({
            attribute_id,
            list: tableData,
            loading: false,
          });
        }
      }
    } catch (error) {
      console.log(error);
      setAttributeValueData({ attribute_id, list: [], loading: false });
    } finally {
      setAttributeValueData((prev) => ({
        attribute_id,
        list: prev.list,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    getAttributeList();
  }, []);

  return (
    <div className="container-fluid">
      <Breadcrumb className="p-2">
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Attributes</Breadcrumb.Item>
      </Breadcrumb>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Attribute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Attribute</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Attribute"
                autoFocus
                {...register("attribute_name")}
                isInvalid={!!errors.attribute_name?.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.attribute_name?.message}
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

      {/* Modal */}
      <Modal show={showTwo} onHide={handleCloseTwo} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Attribute Value</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="text-center">{formMessage ? formMessage : ""}</div> */}
          <div className="row">
            <Form onSubmit={handleSubmit2(addAttributeValue)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Attribute Value</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Attribute Value"
                  autoFocus
                  {...register2("attribute_value")}
                  isInvalid={!!errors2.attribute_value?.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors2.attribute_value?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter Description"
                  autoFocus
                  {...register2("attribute_value_description")}
                  isInvalid={!!errors2.attribute_value_description?.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors2.attribute_value_description?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Control
                type="text"
                placeholder="Enter Attribute"
                autoFocus
                hidden={true}
                {...register2("attribute_type")}
                isInvalid={!!errors2.attribute_type?.message}
              />
            </Form>
          </div>
          <div className="row">
            <div className="co-sm-12">
              <div className="text-center">
                {formMessage2 ? formMessage2 : ""}
              </div>

              <Button
                size="sm"
                variant="primary"
                className=" pull-right"
                disabled={formLoading2}
                onClick={handleSubmit2(addAttributeValue)}
              >
                Add
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="co-sm-12">
              <input
                type="search"
                value={searchTextTwo}
                onChange={(event) => {
                  setSearchTextTwo(event.currentTarget.value);
                }}
                className="top-element pull-right m-2"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Table
                loading={{
                  enabled: attributeValueData.loading,
                  text: "Loading data",
                }}
                columns={[
                  {
                    key: "id",
                    title: "Sr.No.",
                    width: "5%",
                  },
                  {
                    key: "attribute_value",
                    title: "Attribute Value",
                    width: "40%",
                  },
                  {
                    key: "attribute_value_description",
                    title: "Description",
                    width: "40%",
                  },
                ]}
                format={({ column, value }) => {
                  if (column.key === "id") {
                    return `${value}.`;
                  }
                  // if (column.key === "attribute_value") {
                  //   return (
                  //     <Button
                  //       size="sm"
                  //       variant="primary"
                  //       onClick={handleShowTwo}
                  //     >
                  //       <FaClipboardList />
                  //     </Button>
                  //   );
                  // }
                }}
                data={attributeValueData.list}
                search={({ searchText: searchTextValue, rowData, column }) => {
                  if (column.key === "passed") {
                    return (
                      (searchTextValue === "false" && !rowData.passed) ||
                      (searchTextValue === "true" && rowData.passed)
                    );
                  }
                }}
                rowKeyField={"id"}
                searchText={searchTextTwo}
                noData={{
                  text: "No Data Found",
                }}
                childComponents={bootstrapChildComponents}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseTwo} size="sm">
            Close
          </Button>
          {/* <Button
            variant="primary"
            size="sm"
            // onClick={handleSubmit(onSubmit)}
            // disabled={formLoading}
          >
            Add
          </Button> */}
        </Modal.Footer>
      </Modal>
      {/* Modal */}

      <section className="content">
        <div className="container-fluid">
          <Card>
            <Card.Header>
              <h4>
                Attributes
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
                      enabled: attributeData.loading,
                      text: "Loading data",
                    }}
                    columns={[
                      {
                        key: "id",
                        title: "Sr.No.",
                        width: "5%",
                      },
                      {
                        key: "attribute_name",
                        title: "Attribute",
                        width: "40%",
                      },
                      // {
                      //   key: "attribute_description",
                      //   title: "Description",
                      //   width: "50%",
                      // },
                      {
                        key: "attribute_value",
                        title: "Attribute Value",
                        style: { textAlign: "center" },
                        width: "10%",
                      },
                    ]}
                    format={({ column, value }) => {
                      if (column.key === "id") {
                        return `${value}.`;
                      }
                      if (column.key === "attribute_value") {
                        return (
                          <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                              getAttributeValueList(value);
                              handleShowTwo();
                            }}
                          >
                            <FaClipboardList />
                          </Button>
                        );
                      }
                    }}
                    data={attributeData.list}
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

export default AdminAttributes;
