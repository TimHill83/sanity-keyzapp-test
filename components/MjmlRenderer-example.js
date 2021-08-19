import React from "react";
import { Component } from "react";
import ReactDOMServer from "react-dom/server";
import Mjmlcontent from "./mjmlcontent";
import mjml2html from "mjml-browser";

class MjmlRenderer extends Component {
  mj = ReactDOMServer.renderToStaticMarkup(<Mjmlcontent></Mjmlcontent>);
  html = mjml2html(this.mj);

  componentDidMount() {
    console.log("mounted");
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props.document.displayed.subject)}</pre>
        <pre>{this.mj}</pre>
        <pre>{this.html.html}</pre>
      </div>
    );
  }
}

export default MjmlRenderer;
