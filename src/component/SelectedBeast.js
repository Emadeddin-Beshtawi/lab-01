import React, { Component } from "react";

///// We need to import Bootstrap ////////

import "bootstrap/dist/css/bootstrap.min.css";

import { Modal, Button, Card } from "react-bootstrap";

export class SelectedBeast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.e.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img
            style={{ height: "300px" }}
            src={this.props.e.image_url}
            title={this.props.e.title}
            alt={this.props.e.title}
          />
          <p>Description: {this.props.e.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
