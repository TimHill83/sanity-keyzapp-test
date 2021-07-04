import React from "react";
import { Component } from "react";
import { render } from "react-dom";

class InlineHtml extends Component {
  render() {
    const mobileStyles = {
      width: "360px",
      height: "568px",
    };

    const desktopStyles = {
      width: "95%",
      minWidth: "800px",
      height: "700px",
    };
    return <iframe style={this.props.mobile ? mobileStyles : desktopStyles} srcDoc={this.props.content} />;
  }
}

export default InlineHtml;
