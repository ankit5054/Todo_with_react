import React from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";
import logo from "./todologo.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="80"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{" "}
          {props.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>
          </Nav>
          {props.search ? (
            <Form>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          ) : (
            ""
          )}
          {props.search ? (
            <Button variant="outline-primary">Search</Button>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

Header.defaultProps = {
  title: "ankit",
};

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.bool.isRequired,
};
