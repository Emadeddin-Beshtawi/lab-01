// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//////////// ************ //////////

/////// <> </> called Fragment which contains multiple HTML elements /////////

import { React, Component } from "react";

///// We need to import supported Header Component ////////

import Header from "./component/Header";

///// Again, we need to import supported Footer Component ////////

import Footer from "./component/Footer";

///// Again, we need to import supported Main Component ////////

import Main from "./component/Main";

///// Again, we need to import supported HornedBeasts Component ////////

import HornedBeasts from "./component/HornedBeasts";


class App extends Component {
  render() {
    return(
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
)
  }
}
export default App
