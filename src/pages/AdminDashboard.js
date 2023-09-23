//import React from "react";
//import { Container, Nav, Tab, Col, Row } from "react-bootstrap";
//import axios from "../axios";
//import "./AdminDashboard.css";
//function AdminDashboard() {
//    return (
//        <Container>
//            <Tab.Container defaultActiveKey="products">
//                <Row>
//                    <Col sm={3}>
//                        <Nav variant="pills" className="flex-column">
//                            <Nav.Item>
//                                <Nav.Link eventKey="products">Products</Nav.Link>
//                            </Nav.Item>
//                            <Nav.Item>
//                                <Nav.Link eventKey="orders">Orders</Nav.Link>
//                            </Nav.Item>
//                            <Nav.Item>
//                                <Nav.Link eventKey="clients">Clients</Nav.Link>
//                            </Nav.Item>
//                        </Nav>
//                    </Col>
//                    <Col sm={9}>
//                        <Tab.Content>
//                            Hello
//                        </Tab.Content>
//                    </Col>
//                </Row>
//            </Tab.Container>
//        </Container>
//    );
//}

//export default AdminDashboard;
import React from "react";
import { Container, Nav, Tab, Col, Row } from "react-bootstrap";
import axios from "../axios";
import "./AdminDashboard.css";

function generateRecords(count) {
  const records = [];
  for (let i = 1; i <= count; i++) {
    const bgColor = i % 2 === 0 ? "#8e78fa" : "white"; // Alternating row colors
    const record = {
      id: i,
      category: `ID ${i}`,
      quantity: `Quntity ${i}`,
      price: Math.floor(Math.random() * 1000) + 1,
      backgroundColor: bgColor,
    };
    records.push(record);
  }
  return records;
}

function AdminDashboard() {
  const records = generateRecords(15);

  return (
    <Container>
      <Tab.Container defaultActiveKey="products">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="products">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="orders">Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="clients">Clients</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="products">
                {/* You can add content for the "Products" tab here */}
                
              </Tab.Pane>
              <Tab.Pane eventKey="orders">
                {/* You can add content for the "Orders" tab here */}
                <table className="table custom-table">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Quantity</th>
                      <th>No. of Units</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record) => (
                      <tr key={record.id} style={{ backgroundColor: record.backgroundColor }}>
                        <td>{record.id}</td>
                        <td>{record.quntity}</td>
                        <td>{record.units}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Tab.Pane>
              <Tab.Pane eventKey="clients">
                {/* Table for the "Clients" tab */}
                <table className="table custom-table">
                  <thead>
                    <tr>
                      <th>Client ID</th>
                      <th>Client Name</th>
                      <th>Client Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record) => (
                      <tr key={record.id} style={{ backgroundColor: record.backgroundColor }}>
                        <td>{record.id}</td>
                        <td>{record.username}</td>
                        <td>{record.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default AdminDashboard;




