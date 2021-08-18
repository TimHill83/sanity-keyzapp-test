import React from "react";
import { Component } from "react";
import ReactDOMServer from "react-dom/server";
import Mjmlcontent from "../components/mjmlcontent";
import mjml2html from "mjml-browser";

class mjmlrenderer extends Component {
  mj = ReactDOMServer.renderToStaticMarkup(<Mjmlcontent></Mjmlcontent>);
  html = mjml2html(this.mj);

  componentDidMount() {
    console.log("mounted");
    console.log(this.mj);
    console.log(this.html);
  }
  render() {
    return (
      <div>
        <pre>{this.mj}</pre>
        <pre>{this.html.html}</pre>
      </div>
    );
  }
}

export default mjmlrenderer;
