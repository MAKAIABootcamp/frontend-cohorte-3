import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { userLogoutAction } from "../../redux/actions/userActions";

const NavigationBar = () => {
  
  const dispatch = useDispatch();
  const { userAuth } = useSelector((store) => store.userReducer);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Sesión 26: Redux</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex gap-3">
              <NavLink to={"/"}>Home</NavLink>
              {userAuth ? (
                <Button
                  className="btn btn-danger"
                  onClick={() => dispatch(userLogoutAction())}
                >
                  Logout
                </Button>
              ) : (
                <NavLink to={"/login"}>Log In</NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavigationBar;
