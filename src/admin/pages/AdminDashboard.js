import React from "react";
import { Breadcrumb, Button, Card, Row, Col } from "react-bootstrap";
import { AiFillHdd } from "react-icons/ai";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <Breadcrumb className="p-2">
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>

      <section class="content">
        <div class="container-fluid">
          <Card>
            <Card.Header>
              <h4>
                Dashboard{" "}
                {/* <button class="btn btn-xs btn-primary pull-right">View All Open Jobs</button> */}
              </h4>
            </Card.Header>
            <Card.Body >
              {/* <Row>
                <Col sm={3}>
                  <div className="bg-primary row py-3">
                    <div className="col-sm-3 text-white">
                      <AiFillHdd />
                    </div>
                    <div className="col-sm-9 text-white">
                      <h5> Category</h5>
                      <h2>2</h2>
                    </div>

                  </div>
                </Col>
              </Row> */}
              <Row>

                <div class="col-lg-3 col-6 text-white">
                  <div class="small-box bg-info  rounded-1 shadow-sm">
                    <div class="inner">
                      <h3><strong>0</strong></h3>
                      <p>Today's Order</p>
                    </div>
            
                    <Link to='/admin/2/orders' class="small-box-footer">More info <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></Link>

                  </div>
                </div>
                <div class="col-lg-3 col-6 text-white">
                  <div class="small-box bg-success  rounded-1 shadow-sm">
                    <div class="inner">
                      <h3><strong>0</strong></h3>
                      <p>Today's Order</p>
                    </div>
                    <Link to='/admin/2/orders' class="small-box-footer">More info <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></Link>
                  </div>
                </div>

                <div class="col-lg-3 col-6 text-white">
                  <div class="small-box bg-primary  rounded-1 shadow-sm">
                    <div class="inner">
                      <h3><strong>0</strong></h3>
                      <p>Today's Order</p>
                    </div>
                    <a href="" class="small-box-footer">More info <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                  </div>
                </div>

                <div class="col-lg-3 col-6 text-white">
                  <div class="small-box bg-danger  rounded-1 shadow-sm">
                    <div class="inner">
                      <h3><strong>0</strong></h3>
                      <p>Today's Order</p>
                    </div>
                    <a href="" class="small-box-footer">More info <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                  </div>
                </div>






              </Row>




            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
