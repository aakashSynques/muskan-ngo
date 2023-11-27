import React from "react";
import { Breadcrumb, Button, Card } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <Breadcrumb className="p-2">
        {/* <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
         <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item> 
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item> */}
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
            <Card.Body>
              {/* <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
