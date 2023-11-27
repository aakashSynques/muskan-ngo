import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Form, Modal } from "react-bootstrap";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Table } from "ka-table";
import { fetch } from "../../utils";
import "ka-table/style.css";

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

const AdminSubCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [subCategoryData, setSubCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formMessage, setFormMessage] = useState(null);
  const [show, setShow] = useState(false);
  const schema = z.object({
    category_id: z.string().min(1, { message: "select category is required." }),
    sub_category_name: z
      .string()
      .min(1, { message: "sub category name is required." }),
    sub_category_description: z
      .string()
      .min(1, { message: "sub category description is required." }),
  });
  const [searchText, setSearchText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      category_id: "",
      sub_category_name: "",
      sub_category_description: "",
    },
    resolver: zodResolver(schema),
  });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setFormMessage(null);
    reset();
  };

  const onSubmit = async (data) => {
    try {
      setFormLoading(true);
      setFormMessage(
        <font color="blue">
          <b>Loading....</b>
        </font>
      );
      const response = await fetch("sub-category/add", "POST", data, null);
      if (response.status === 201) {
        const { success, message } = response.data;
        if (success === true) {
          setFormMessage(
            <font color="green">
              <b>{message}</b>
            </font>
          );
          reset();
          getSubCategory();
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

  const getSubCategory = async () => {
    try {
      setLoading(true);
      const response = await fetch("sub-category/all", "GET", null, null);
      if (response.status === 200) {
        const { success, data } = response.data;
        if (success === true) {
          const sub_categorys = data.sub_categorys;
          const tableData = await sub_categorys.map((sub_category, index) => {
            return {
              id: index + 1,
              category_name: sub_category.category_name,
              sub_category_name: sub_category.sub_category_name,
              sub_category_description: sub_category.sub_category_description,
              sub_category_id: sub_category.sub_category_id,
              display_status: {
                display_status: sub_category.display_status,
                sub_category_id: sub_category.sub_category_id,
              },
            };
          });
          setSubCategoryData(tableData);
        } else {
          setSubCategoryData([]);
        }
      } else {
        setSubCategoryData([]);
      }
    } catch (error) {
      setSubCategoryData([]);
    } finally {
      setLoading(false);
    }
  };
  const setSubCategoryDisplayStatus = async (
    sub_category_id,
    display_status
  ) => {
    try {
      const response = await fetch(
        "sub-category/update-dispaly-status",
        "POST",
        {
          sub_category_id: sub_category_id,
          display_status: display_status ? 0 : 1,
        },
        null
      );

      if (response.status === 200) {
        const { success, message } = response.data;
        if (success === true) {
          // alert(message);
          getSubCategory();
        }
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
      }  else if(error.message){
        alert(error.message);
      }else{
        alert("Something went wrong.");
      }
    }
  };

  const getCategory = async () => {
    try {
      setLoading(true);
      const response = await fetch("category/all", "GET", null, null);
      if (response.status === 200) {
        const { success, data } = response.data;
        if (success === true) {
          setCategoryData(data.categorys);
        } else {
          setCategoryData([]);
        }
      } else {
        setCategoryData([]);
      }
    } catch (error) {
      setCategoryData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSubCategory();
    getCategory();
  }, []);

  return (
    <div className="container-fluid">
      <Breadcrumb className="p-2">
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>  */}
        <Breadcrumb.Item active>Sub Category</Breadcrumb.Item>
      </Breadcrumb>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                {...register("category_id")}
                isInvalid={!!errors.category_id?.message}
              >
                <option value=""> -- select -- </option>
                {categoryData?.map((category, index) => {
                  return (
                    <option
                      key={`option_${index}`}
                      value={category.category_id}
                    >
                      {category.category_name}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.category_id?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Sub Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Sub Category"
                autoFocus
                {...register("sub_category_name")}
                isInvalid={!!errors.sub_category_name?.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.sub_category_name?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Sub Category Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Sub Category Description"
                {...register("sub_category_description")}
                isInvalid={!!errors.sub_category_description?.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.sub_category_description?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
          <div className="text-center">{formMessage ? formMessage : ""}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit(onSubmit)}
            disabled={formLoading}
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
                Sub Category
                <button
                  className="btn btn-xs btn-primary pull-right"
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
                      enabled: loading,
                      text: "Loading data",
                    }}
                    columns={[
                      {
                        key: "id",
                        title: "Sr.No.",
                        width: "5%",
                      },
                      {
                        key: "sub_category_name",
                        title: "Sub Category",
                        width: "25%",
                      },
                      {
                        key: "category_name",
                        title: "Category",
                        width: "25%",
                      },
                      {
                        key: "sub_category_description",
                        title: "Description",
                        width: "40%",
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
                              setSubCategoryDisplayStatus(
                                value.sub_category_id,
                                value.display_status ? true : false
                              );
                            }}
                          />
                        );
                      }
                    }}
                    data={subCategoryData}
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

export default AdminSubCategory;
