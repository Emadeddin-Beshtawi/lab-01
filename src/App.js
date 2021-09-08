/////// <> </> called Fragment which contains multiple HTML elements /////////

import { React, Component } from "react";

///// We need to import Bootstrap ////////

import "bootstrap/dist/css/bootstrap.min.css";

///// We need to import supported Header Component ////////

import Header from "./component/Header";

///// Again, we need to import supported Footer Component ////////

import Footer from "./component/Footer";

///// Again, we need to import supported Main Component ////////

import Main from "./component/Main";

///// Again, we need to import supported NavBarCustome Component ////////

import NavBarCustome from "./component/NavBarCustome";

import SelectedBeast from "./component/SelectedBeast";

import data from "./component/data.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      title: "",
      keyword: "",
      horns: "",
    };
  }

  /////// handle-clode function ///////////
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  //////// handle-open function ////////

  handleOpen = (title, keyword, horns) => {
    this.setState({
      showModal: true,
      title: title,
      keyword: keyword,
      horns: horns,
    });
  };

  render() {
    return (
      <>
        <NavBarCustome />
        <Header />

        <Main data={data} handleOpen={this.handleOpen} />
        <SelectedBeast
          handleClose={this.handleClose}
          showModal={this.state.showModal}
          title={this.state.title}
          keyword={this.state.keyword}
          horns={this.state.horns}
        />
        <Footer />
      </>
    );
  }
}
export default App;
