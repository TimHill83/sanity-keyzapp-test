import React, { Component } from "react";
import InlineHtml from "./InlineHtml";
import axios from "axios";
import { Flex, Text, Button, studioTheme, ThemeProvider } from "@sanity/ui";
import { CopyIcon, LeaveIcon } from "@sanity/icons";

class EmailPreview extends Component {
  state = {};

  getHtmlAndMjmlAxios = async function () {
    const Url = "http://localhost:7071/api/Generate?sanityid=" + this.props.document.displayed._id;
    try {
      let { data } = await axios.get(Url);
      return data;
    } catch (error) {
      console.log("An error occurred:");
      console.log(error.message);
      console.log(error.response.data.message);
      throw error;
    }
  };

  async componentDidMount() {
    let apiOutput = "";

    try {
      apiOutput = await this.getHtmlAndMjmlAxios();
      this.setState({ content: apiOutput.html });
    } catch (error) {
      apiOutput = "";
      this.setState({ content: "", errors: error.response.data.message ?? error.message });
    }
  }

  render() {
    const renderIFrame = () => {
      if (this.state.content) {
        return <InlineHtml content={this.state.content} />;
      }
    };
    const renderErrors = () => {
      if (this.state.errors) {
        return <h2 style={{ color: "red" }}>{this.state.errors}</h2>;
      }
    };

    return (
      <ThemeProvider theme={studioTheme}>
        {/* <textarea
          style={{ position: `absolute`, pointerEvents: `none`, opacity: 0 }}
          ref={input}
          value={displayContent}
          readOnly
          tabIndex="-1"
        /> */}
        <Flex direction="column" style={{ height: `100%` }}>
          <Flex
            style={{
              alignItems: `center`,
              borderBottom: `1px solid var(--card-border-color)`,
              padding: `0.5rem`,
              flexShrink: 0,
            }}
          >
            <Button
              fontSize={[1]}
              icon={CopyIcon}
              style={{ marginLeft: `0.5rem` }}
              padding={[2]}
              text="Copy"
              tone="default"
              onClick={() => handleCopy()}
            />
          </Flex>
          {renderErrors()}
          {renderIFrame()}
        </Flex>
      </ThemeProvider>
    );
  }
}

export default EmailPreview;
