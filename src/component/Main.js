import React, { Component } from "react";

///// To import HornedBeadts Component within Main Component /////

import HornedBeasts from "./HornedBeasts";

class Main extends Component {
  render() {
    return (
      <div className="row" style={{ margin: " 20px 100px" }}>
        <h1>Horned-Beast</h1>
        {this.props.data.map((z, index) => {
          {
            console.log(index);
          }

          return (
            <HornedBeasts
              handleOpen={this.props.handleOpen}
              image_url={z.image_url}
              title={z.title}
              description={z.description}
              keyword={z.keyword}
              key={index}
              horns={z.horns}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
