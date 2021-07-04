import React, { Component } from "react";
import InlineHtml from "./InlineHtml";
import axios from "axios";
import { Flex, Text, Button, studioTheme, ThemeProvider } from "@sanity/ui";
import { CopyIcon, LeaveIcon } from "@sanity/icons";

class EmailPreview extends Component {
  state = { Mobile: false };
  inputRef = React.createRef();

  handleCopy = function () {
    if (!this.inputRef?.current) return;

    this.inputRef.current.select();
    this.inputRef.current.setSelectionRange(0, 99999);

    // eslint-disable-next-line react/prop-types
    document.execCommand("copy");
  };

  toggleMobile = function () {
    this.setState({ Mobile: !this.state.Mobile });
  };

  getHtmlAndMjmlAxios = async function () {
    const Url = "http://localhost:7071/api/Generate?sanityid=" + this.props.document.displayed._id;
    try {
      let { data } = await axios.get(Url);
      return data;
    } catch (error) {
      console.log("1st: " + error);
      console.log("Message: " + error.message);
      throw error;
    }
  };

  async UpdateContent() {
    let apiOutput = "";

    try {
      apiOutput = await this.getHtmlAndMjmlAxios();
      this.setState({ content: apiOutput.html, errors: "" });
    } catch (error) {
      apiOutput = "";
      console.log(error);

      this.setState({ content: "", errors: error.response?.data ? error.response.data.message : error.message });
    }
  }

  async componentDidMount() {
    await this.UpdateContent();
  }

  render() {
    const renderIFrame = () => {
      if (this.state.content) {
        return <InlineHtml mobile={this.state.Mobile} content={this.state.content} />;
      }
    };
    const renderErrors = () => {
      if (this.state.errors) {
        return <h2 style={{ color: "red" }}>{this.state.errors}</h2>;
      }
    };

    return (
      <ThemeProvider theme={studioTheme}>
        <textarea
          style={{ position: `absolute`, pointerEvents: `none`, opacity: 0 }}
          value={this.state.content}
          ref={this.inputRef}
          readOnly
          tabIndex="-1"
        />
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
              text="Copy Html"
              tone="default"
              onClick={() => this.handleCopy()}
            />
            <Button
              fontSize={[1]}
              icon={CopyIcon}
              style={{ marginLeft: `0.5rem` }}
              padding={[2]}
              text="Refresh"
              tone="default"
              onClick={() => this.UpdateContent()}
            />
            <Button
              fontSize={[1]}
              icon={CopyIcon}
              style={{ marginLeft: `0.5rem` }}
              padding={[2]}
              text="Deskop"
              tone="default"
              onClick={() => this.UpdateContent()}
            />
            <Button
              fontSize={[1]}
              icon={CopyIcon}
              style={{ marginLeft: `0.5rem` }}
              padding={[2]}
              text="Mobile"
              tone="primary"
              onClick={() => this.toggleMobile()}
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
