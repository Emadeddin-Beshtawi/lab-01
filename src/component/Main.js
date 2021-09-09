import React, { Component } from "react";

///// Again, we need to import supported HornedBeasts Component ////////

import HornedBeasts from "./HornedBeasts";

///// We need to import Bootstrap ////////

import "bootstrap/dist/css/bootstrap.min.css";

import { Row } from "react-bootstrap";

class Main extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  select = (title) => {
    this.props.select(title);
  };

  handleOpen = () => {
    this.props.handleOpen();
  };

  render() {
    return (
      <main>
        <Row
          style={{ margin: "auto 15px" }}
          xs={1}
          sm={2}
          md={3}
          lg={4}
          className="g-4"
        >
          {this.props.data.map((y) => (
            <HornedBeasts
              key={y.title}
              title={y.title}
              src={y.image_url}
              description={y.description}
              select={this.select}
              handleOpen={this.handleOpen}
              keyword={y.keyword}
              horns={y.horns}
            />
          ))}
        </Row>
      </main>
    );
  }
}

export default Main;
