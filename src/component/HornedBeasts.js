import React, { Component } from "react";

import { Button, Col, Card } from "react-bootstrap";

export class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: 0,
    };
  }

  animalVote = () => {
    this.setState({
      initialValue: this.state.initialValue + 1,
    });
  };

  getHandleOpen = () => {
    this.props.select(this.props.title);
    this.props.handleOpen();
  };

  render() {
    return (
      <Col>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            alt="HornedBeast"
            className="card-img-top"
            title={this.props.title}
            src={this.props.src}
            onClick={this.handleOpen}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>

            <Card.Text>
              Description: {this.props.description} <br />
              Keyword: {this.props.keyword} <br />
              Horns: {this.props.horns} <br />
              <button onClick={this.animalVote}>
                Vote {this.state.initialValue}
              </button>
            </Card.Text>

            <Button variant="primary" onClick={this.getHandleOpen}>
              Discover more
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeasts;
