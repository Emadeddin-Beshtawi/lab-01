import React, { Component } from "react";

import { Modal, Button, Image } from "react-bootstrap";

class SelectedBeast extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {this.props.title} </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* <img alt={"title"} src={this.props.image_url} />  */}
          <Image src={this.props.src} thumbnail style={{ height: "300px" }} />
          <br />
          Description: {this.props.description} <br />
          Keyword: {this.props.keyword} <br />
          Horns: {this.props.horns} <br />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
