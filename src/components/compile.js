import React, { Component } from "react";
import { Navbar, Languages } from "./index";
import Prism from "prismjs";
import "../css/prism.css";
export default class compile extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      language: "",
      input: "",
    };
  }

  handleChange = (event) => {
    console.log("code changed");
    this.setState({
      code: event.target.value,
    });
  };
  render() {
    let block = document.getElementById("block");
    Prism.highlightElement(block);
    return (
      <div>
        <Navbar />
        <Languages />
        <pre>
          <code
            id="block"
            className="language-cpp"
            contentEditable="true"
            onChange={this.handleChange}
          >
            int main(){}
          </code>
        </pre>

        <div>compile</div>
      </div>
    );
  }
}
