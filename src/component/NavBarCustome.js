import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container } from "react-bootstrap";

class navBarCustome extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            {/* <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "} */}
            Nab-bar for lab-03
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default navBarCustome;
