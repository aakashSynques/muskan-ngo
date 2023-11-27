import React, { useEffect, useState } from "react";
import { Breadcrumb, Card, Form, Image } from "react-bootstrap";
import { fetch } from "../../utils";
import { Table } from "ka-table";
import "ka-table/style.css";

import { PagingPosition, SortingMode } from "ka-table/enums";

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

const AdminProducts = () => {
  const [products, setProducts] = useState({ list: [], loading: false });
  const [searchText, setSearchText] = useState("");
  const getProductList = async () => {
    try {
      setProducts({ list: [], loading: true });
      const response = await fetch("product/all", "GET", null, null);

      if (response.status === 200) {
        const { success, data } = response.data;
        if (success === true) {
          const product_list = data.product_list;
          const tableData = await product_list.map((product, index) => {
            return {
              id: index + 1,
              product_name: product.product_name,
              product_thumbnail: product.product_thumbnail,
              product_code: product.product_code,
              category_name: product.category_name,
              sub_category_name: product.sub_category_name,
              product_MRP: product.product_MRP,
              product_MSP: product.product_MSP,
              gst_percent: product.gst_percent,
              in_stock_status: {
                product_id: product.product_id,
                in_stock_status: product.in_stock_status,
              },
              display_status: {
                product_id: product.product_id,
                display_status: product.display_status,
              },
              desktop_display: {
                product_id: product.product_id,
                desktop_display: product.desktop_display,
              },
              action: product.action,
            };
          });
          setProducts({ list: tableData, loading: false });
        }
      }
    } catch {
      setProducts({ list: [], loading: false });
    } finally {
      setProducts((pre) => ({ list: pre.list, loading: false }));
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  const setProductDesktopDisplay = async (product_id, desktop_display) => {
    try {
      const response = await fetch(
        "product/update-desktop-display",
        "POST",
        {
          product_id: product_id,
          desktop_display: desktop_display ? 0 : 1,
        },
        null
      );

      if (response.status === 200) {
        const { success } = response.data;
        if (success === true) {
          getProductList();
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

  const setProductInStockStatus = async (product_id, in_stock_status) => {
    try {
      const response = await fetch(
        "product/update-in-stock-status",
        "POST",
        {
          product_id: product_id,
          in_stock_status: in_stock_status ? 0 : 1,
        },
        null
      );

      if (response.status === 200) {
        const { success } = response.data;
        if (success === true) {
          getProductList();
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

  const setProductDispalyStatus = async (product_id, display_status) => {
    try {
      const response = await fetch(
        "product/update-display-status",
        "POST",
        {
          product_id: product_id,
          display_status: display_status ? 0 : 1,
        },
        null
      );

      if (response.status === 200) {
        const { success } = response.data;
        if (success === true) {
          getProductList();
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
        <Breadcrumb.Item active>Products</Breadcrumb.Item>
      </Breadcrumb>

      <section class="content">
        <div class="container-fluid">
          <Card>
            <Card.Header>
              <h4>
                Products{" "}
                {/* <button class="btn btn-xs btn-primary pull-right">View All Open Jobs</button> */}
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

              {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
              <div className="row">
                <div className="col-sm-12 ">
                  <Table
                    loading={{
                      enabled: products.loading,
                      text: "Loading data",
                    }}
                    columns={[
                      {
                        key: "id",
                        title: "Sr.No.",
                        width: "10%",
                      },
                      {
                        key: "product_thumbnail",
                        title: "Product Img",
                        width: "10%",
                      },
                      {
                        key: "product_name",
                        title: "Product Name",
                        width: "10%",
                      },
                      {
                        key: "product_code",
                        title: "Product Code",
                        width: "10%",
                      },
                      {
                        key: "category_name",
                        title: "Category",
                        width: "10%",
                      },
                      {
                        key: "sub_category_name",
                        title: "Sub Category",
                        width: "10%",
                      },

                      {
                        key: "product_MRP",
                        title: "Product MRP (Rs.)",
                        width: "10%",
                        style: { textAlign: "right" },
                      },
                      {
                        key: "product_MSP",
                        title: "Product MSP (Rs.)",
                        width: "10%",
                        style: { textAlign: "right" },
                      },
                      {
                        key: "gst_percent",
                        title: "GST (%)",
                        width: "10%",
                        style: { textAlign: "center" },
                      },
                      {
                        key: "in_stock_status",
                        title: "In-Stock",
                        width: "10%",
                        style: { textAlign: "center" },
                      },
                      {
                        key: "display_status",
                        title: "Display Status ",
                        width: "10%",
                        style: { textAlign: "center" },
                      },
                      {
                        key: "desktop_display",
                        title: "Desktop Display",
                        width: "10%",
                        style: { textAlign: "center" },
                      },
                      {
                        key: "action",
                        title: "Action",
                        width: "10%",
                      },
                    ]}
                    format={({ column, value }) => {
                      if (column.key === "id") {
                        return `${value}.`;
                      }
                      if (column.key === "gst_percent") {
                        return `${value} %`;
                      }
                      if (column.key === "product_thumbnail") {
                        return <Image src={value} thumbnail />;
                      }
                      if (column.key === "product_MRP") {
                        return `Rs. ${value}`;
                      }
                      if (column.key === "product_MSP") {
                        return `Rs. ${value}`;
                      }

                      if (column.key === "in_stock_status") {
                        return (
                          <>
                            <p
                              className={`text-xs fw-bold  ${
                                value.in_stock_status === "In Stock"
                                  ? "text-success"
                                  : "text-danger"
                              }`}
                              style={{ fontSize: "12px" }}
                            >
                              ({value.in_stock_status})
                            </p>
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              checked={
                                value.in_stock_status === "In Stock"
                                  ? true
                                  : false
                              }
                              onChange={() => {
                                setProductInStockStatus(
                                  value.product_id,
                                  value.in_stock_status === "In Stock"
                                    ? true
                                    : false
                                );
                              }}
                            />
                          </>
                        );
                      }

                      if (column.key === "display_status") {
                        return (
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            checked={value.display_status ? true : false}
                            onChange={() => {
                              setProductDispalyStatus(
                                value.product_id,
                                value.display_status ? true : false
                              );
                            }}
                          />
                        );
                      }
                      if (column.key === "desktop_display") {
                        return (
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            checked={value.desktop_display ? true : false}
                            onChange={() => {
                              setProductDesktopDisplay(
                                value.product_id,
                                value.desktop_display ? true : false
                              );
                            }}
                          />
                        );
                      }
                    }}
                    data={products.list}
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
                    paging={{
                      enabled: true,
                      pageIndex: 0,
                      pageSize: 10,
                      pageSizes: [5, 10, 15],
                      position: PagingPosition.Bottom,
                    }}
                    rowKeyField={"id"}
                    searchText={searchText}
                    noData={{
                      text: "No Data Found",
                    }}
                    sortingMode={SortingMode.Single}
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

export default AdminProducts;
