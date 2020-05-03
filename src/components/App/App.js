import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList.js";
import SearchBar from "../SearchBar/SearchBar.js";
import Footer from '../Footer/Footer.js';

class App extends React.Component {
  render (){
    return (
      <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList /> 
      < Footer />
</div>
    )
  }
}

export default App;