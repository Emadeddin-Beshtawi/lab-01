import React, { Component } from "react";

///// We need to import Bootstrap ////////

import { Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export class Forms extends Component {
  onChange = (e) => {
    this.props.onChange(e);
  };

  render() {
    return (
      <Form>
        <Form.Group
          style={{ margin: "50px 15px", width: "auto" }}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Select
            onChange={this.onChange}
            aria-label="Default select example"
          >
            <option value="-1">How many horns?</option>
            <option value="-1">Select all</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Select>
        </Form.Group>
      </Form>
    );
  }
}

export default Forms;
