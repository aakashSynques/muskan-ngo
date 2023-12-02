import React, { useEffect, useState, useCallback } from "react";
import { Breadcrumb, Tab, Tabs, Card, Button } from "react-bootstrap";
import { Table } from "ka-table";
import { fetch } from "../../utils";
import "ka-table/style.css";
import { useNavigate, Link, useParams } from "react-router-dom";
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

const orderStatusList = [
  { order_status: 1, order_status_name: "Initiated" },
  { order_status: 2, order_status_name: "Confirm" },
  { order_status: 3, order_status_name: "Cancelled" },
  { order_status: 4, order_status_name: "Dispatched" },
  { order_status: 5, order_status_name: "Delivered" },
  { order_status: 6, order_status_name: "Amount Mismatch" },
];

const AdminOrders = () => {
  const navigate = useNavigate();

  const { order_status, customer_id } = useParams();
  const [orders, setOrders] = useState({ list: [], loading: false });
  const [searchText, setSearchText] = useState("");

  const getOrders = useCallback(async () => {
    try {
      setOrders({ list: [], loading: true });
      const response = await fetch("order/all", "POST", { order_status }, null);
      if (response.status === 200) {
        const { success, data } = response.data;
        if (success === true) {
          const orders = data.orders;
          const tableData = await orders.map((order, index) => {
            return {
              id: index + 1,
              order_details: {
                order_no: order.order_no,
                order_datetime: order.order_datetime,
              },
              customer_details: {
                customer_email: order.customer_email,
                customer_lname: order.customer_lname,
                customer_fname: order.customer_fname,
                customer_mobile: order.customer_mobile,
              },
              current_status: order.payment_status_name,
              pay_via: order.delivery_PayMode,
              base_amount: order.order_amount,
              total_amount: order.order_amount,
              print_invoice: { cust_order_id: order.cust_order_id },
              view_details: { cust_order_id: order.cust_order_id },
              ...order,
            };
          });
          setOrders({ list: tableData, loading: false });
        }
      }
    } catch (error) {
      setOrders({ list: [], loading: false });
      console.log(error);
    } finally {
      setOrders((pre) => ({ list: pre.list, loading: false }));
    }
  }, [order_status]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <div className="container-fluid">
      <Breadcrumb className="p-2">
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Orders</Breadcrumb.Item>
      </Breadcrumb>
      <section class="content">
        <div class="container-fluid">
          <Card>
            <Card.Header>
              <h4>Orders</h4>
            </Card.Header>
            <Card.Body>
              <Tabs
                defaultActiveKey={order_status}
                id="uncontrolled-tab-example"
                className="mb-3"
                onSelect={(k) => navigate(`/admin/${k}/orders`)}
              >
                {orderStatusList?.map((item) => (
                  <Tab
                    eventKey={item.order_status}
                    title={item.order_status_name}
                  >
                    <OrderTable
                      searchText={searchText}
                      setSearchText={setSearchText}
                      orders={orders}
                    />
                  </Tab>
                ))}
              </Tabs>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>
      </section>
    </div>
  );
};

const OrderTable = ({ searchText, setSearchText, orders }) => (
  <>
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
      <div className="col-sm-12 ">
        <Table
          loading={{
            enabled: orders.loading,
            text: "Loading data",
          }}
          columns={[
            {
              key: "id",
              title: "Sr.No.",
              width: "5%",
            },
            {
              key: "order_details",
              title: "Order Details",
              width: "20%",
            },
            {
              key: "customer_details",
              title: "Customer Details",
              width: "20%",
            },
            {
              key: "current_status",
              title: "Current Status",
              width: "5%",
            },
            {
              key: "pay_via",
              title: "Pay Via",
              width: "5%",
            },
            {
              key: "base_amount",
              title: "Base Amount",
              width: "5%",
              style: { textAlign: "right" },
            },
            {
              key: "total_amount",
              title: "Total Amount",
              width: "5%",
              style: { textAlign: "right" },
            },
            {
              key: "view_details",
              title: "View Details",
              width: "5%",
              style: { textAlign: "center" },
            },
            {
              key: "print_invoice",
              title: "Print Invoice",
              width: "5%",
              style: { textAlign: "center" },
            },
          ]}
          format={({ column, value }) => {
            if (column.key === "id") {
              return `${value}.`;
            }
            if (column.key === "order_details") {
              return (
                <p>
                  <b>Order No. :</b> {value.order_no}
                  <br />
                  <b>Order Date:</b> {value.order_datetime}
                </p>
              );
            }
            if (column.key === "customer_details") {
              return (
                <p>
                  <b>Name:</b> {value.customer_fname} {value.customer_lname}
                  <br />
                  <b>Email :</b> {value.customer_email}
                  <br />
                  <b>Mobile No. :</b> {value.customer_mobile}
                </p>
              );
            }
            if (column.key === "view_details") {
              return (
                <Link
                  to={`/admin/order/${value.cust_order_id}/${value.cust_order_id}`}
                >
                  <Button size="sm">view</Button>
                </Link>
              );
            }
            if (column.key === "print_invoice") {

              return <Button size="sm">print</Button>;

              // {
              //   orderData.invoice_no != "" &&
              //   <tr>Invoice No :  <a href={`${BASE_URL}/order/invoice/${orderId}/${CryptoJS.SHA1(orderId)}`} target='_black'>{orderData.invoice_no}</a></tr>
              // }

            }
          }}
          data={orders.list}
          search={({ searchText: searchTextValue, rowData, column }) => {
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
            pageSize: 15,
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
  </>
);

export default AdminOrders;
