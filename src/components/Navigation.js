import React from "react";
import { Navbar, Button, Nav, NavDropdown, Container, Form, FormControl } from "react-bootstrap";
import "./Navigation.css";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/userSlice";

function Navigation() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div className="navigation-container">
      <div className="navigation-container1">
      {/* Navigation Bar */}
      <Navbar className="navigation-container">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>BEACHSIDE FASHION</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/*if no user*/}
              {!user && (
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
              )}
              {user && !user.isAdmin && (
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>
                    {user?.cart.count > 0 && (
                      <span className="badge badge-warning" id="cartcount">
                        {user.cart.count}
                      </span>
                    )}
                  </Nav.Link>
                </LinkContainer>
              )}
              {/*if user*/}
              {user && (
                <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                  {user.isAdmin && (
                    <>
                      <LinkContainer to="/admin">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/new-product">
                        <NavDropdown.Item>Create Product</NavDropdown.Item>
                      </LinkContainer>
                    </>
                  )}
                  {!user.isAdmin && (
                    <>
                      <LinkContainer to="/cart">
                        <NavDropdown.Item>Cart</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orders">
                        <NavDropdown.Item>My orders</NavDropdown.Item>
                      </LinkContainer>
                    </>
                  )}
                  <NavDropdown.Divider />
                  <Button variant="danger" onClick={handleLogout} className="logout-btn">Logout
                  </Button>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar></div>


    </div>
  );
}

export default Navigation;

