import React, { Component } from "react";
///// We need to import supported Header Component ////////

import Header from "./component/Header";

///// Again, we need to import supported Footer Component ////////

import Footer from "./component/Footer";

///// Again, we need to import supported Main Component ////////

import Main from "./component/Main";

///// Again, we need to import supported data.json Component ////////

import data from "./component/data.json";

///// Again, we need to import supported Forms Component ////////

import SelectedBeast from "./component/SelectedBeast";

///// Again, we need to import supported SelectedBeast Component ////////

import Forms from "./component/Forms";

///// Again, we need to import supported NavBarCustome Component ////////

import NavBarCustome from "./component/NavBarCustome";

class App extends Component {
  /////// handle-close function ///////////
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  //////// handle-open function ////////

  handleOpen = () => {
    this.setState({
      showModal: true,
    });
  };

  // React Async is a utility belt for declarative promise resolution and data fetching

  // The keyword await is used to wait for the activity which here is a promise of fetching data from remote server.

  onChange = async (w) => {
    await this.setState({
      hornsNumber: Number(w.target.value),
    });
  };

  constructor() {
    super();
    this.state = {
      e: {},
      show: false,
      hornsNumber: -1,
    };
    this.data = data;
  }

  select = (title) => {
    let getHandleOpen;
    this.data.find((e) => {
      if (e.title === title) {
        getHandleOpen = e;
        return e;
      }
    });
    this.setState({
      e: getHandleOpen,
      showModal: true,
    });
  };

  render() {
    let dataFiltiring = this.data.filter(
      (y) => y.horns === this.state.hornsNumber
    );

    dataFiltiring = dataFiltiring.length === 0 ? this.data : dataFiltiring;

    return (
      <div>
        <NavBarCustome />
        <Header />
        <Forms onChange={this.onChange} />
        <Main
          data={dataFiltiring}
          select={this.select}
          handleOpen={this.handleOpen}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          e={this.state.e}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
