import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

class Main extends Component {
  // state = {
  //   result: {},
  //   search: ""
  // };

  // When this component mounts, search for the movie "The Matrix"
  // componentDidMount() {
  //   this.searchMovies("The Matrix");
  // }

  render() {
    return (
      <div>
        <Jumbotron/>
        <h1>Main page</h1>
      
      </div>
    );
  }
}

export default Main;
