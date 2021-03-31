import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to={""}>
        <Navbar.Brand data-testid="brand">Changeme To App Name</Navbar.Brand>
      </LinkContainer>
      <Nav>
        <LinkContainer to={"/about"}>
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;
