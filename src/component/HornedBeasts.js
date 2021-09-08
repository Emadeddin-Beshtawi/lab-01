import React, { Component } from "react";

import { Button, Col, Card } from "react-bootstrap";

class HornedBeasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: 0,
    };
  }

  getHandleOpen = () => {
    let title = this.props.title;
    let keyword = this.props.keyword;
    let horns = this.props.horns;
    this.props.handleOpen(title, keyword, horns);
  };

  animalVote = () => {
    this.setState({
      initialValue: this.state.initialValue + 1,
    });
  };

  render() {
    return (
      <Col>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            alt="HornedBeast"
            className="card-img-top"
            title={this.props.title}
            src={this.props.image_url}
            onClick={this.handleOpen}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>

            <Card.Text>
              Description: {this.props.description} <br />
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
