import React from "react";
import { Component } from "react";
import ReactDOMServer from "react-dom/server";
import Mjmlcontent from "../components/mjmlcontent";

class mjmlrenderer extends Component {
  mj = ReactDOMServer.renderToStaticMarkup(<Mjmlcontent></Mjmlcontent>);
  componentDidMount() {
    console.log("mounted");
    console.log(this.mj);
  }
  render() {
    return (
      <div>
        <pre>{this.mj}</pre>
      </div>
    );
  }
}

export default mjmlrenderer;
