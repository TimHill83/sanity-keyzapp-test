import React, { Component } from "react";
import InlineHtml from "./InlineHtml";
import axios from "axios";
import client from "part:@sanity/base/client";
import { debounce } from "lodash";

import { Flex, Text, Button, studioTheme, ThemeProvider } from "@sanity/ui";
import { CopyIcon, MobileDeviceIcon, ResetIcon } from "@sanity/icons";

class EmailPreview extends Component {
  state = { Mobile: false };
  htmlBoxRef = React.createRef();
  mjmlBoxRef = React.createRef();

  handleCopyHtml = function () {
    if (!this.htmlBoxRef?.current) return;

    this.htmlBoxRef.current.select();
    this.htmlBoxRef.current.setSelectionRange(0, 99999);

    // eslint-disable-next-line react/prop-types
    document.execCommand("copy");
  };

  handleCopyMjml = function () {
    if (!this.mjmlBoxRef?.current) return;

    this.mjmlBoxRef.current.select();
    this.mjmlBoxRef.current.setSelectionRange(0, 99999);

    // eslint-disable-next-line react/prop-types
    document.execCommand("copy");
  };

  toggleMobile = function () {
    this.setState({ Mobile: !this.state.Mobile });
  };

  getHtmlAndMjmlAxios = async function () {
    const { dataset } = client.config();

    //remove this dodgy code when sanity has an answer on the .env file bug
    let emailApiBase = "http://localhost:7071/api";
    let emailApiKey = "";
    if (dataset === "production") {
      emailApiBase = "https://zappemailgenerator.azurewebsites.net/api";
      emailApiKey = "N3i89qtCfCqbj0IfwW/9v7CreUtqJnwMQaJ28FxblR3XjU1FMjKZMA==";
    }

    //THis method should work!
    // const emailApiBase = process.env.SANITY_STUDIO_EMAIL_API_BASE;
    // const emailApiKey = process.env.SANITY_STUDIO_EMAIL_API_KEY;

    const Url = `${emailApiBase}/Generate?sanityid=${this.props.document.displayed._id}&dataset=${dataset}${
      emailApiKey ? "&code=" + emailApiKey : ""
    }`;
    console.log(Url);
    //const Url = `http://localhost:7071/api/Generate?sanityid=${this.props.document.displayed._id}&dataset=${dataset}`;

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
      this.setState({ content: apiOutput.html, mjml: apiOutput.mjml, errors: "" });
    } catch (error) {
      apiOutput = "";
      console.log(error);

      this.setState({ content: "", errors: error.response?.data ? error.response.data.message : error.message });
    }
  }

  refresh = debounce(() => {
    //console.log("debounce");
    this.UpdateContent();
  }, 1000);

  async componentDidMount() {
    await this.UpdateContent();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.document.draft.content !== this.props.document.draft.content) {
      console.log("draft content changed");
      this.refresh();
    }
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
          ref={this.htmlBoxRef}
          readOnly
          tabIndex="-1"
        />
        <textarea
          style={{ position: `absolute`, pointerEvents: `none`, opacity: 0 }}
          value={this.state.mjml}
          ref={this.mjmlBoxRef}
          readOnly
          tabIndex="-1"
        />
        <Flex direction="column" style={{ height: `100%` }}>
          <Flex
            justify="space-between"
            style={{
              alignItems: `center`,
              borderBottom: `1px solid var(--card-border-color)`,
              padding: `0.5rem`,
              flexShrink: 0,
            }}
          >
            <Flex>
              <Button
                fontSize={[1]}
                icon={ResetIcon}
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
                text="Copy Html"
                tone="default"
                onClick={() => this.handleCopyHtml()}
              />
              <Button
                fontSize={[1]}
                icon={CopyIcon}
                style={{ marginLeft: `0.5rem` }}
                padding={[2]}
                text="Copy Mjml"
                tone="default"
                onClick={() => this.handleCopyMjml()}
              />
            </Flex>
            <Flex>
              <Button
                fontSize={[1]}
                icon={MobileDeviceIcon}
                style={{ marginLeft: `0.5rem` }}
                padding={[2]}
                text={this.state.Mobile ? "Desktop" : "Mobile"}
                tone={this.state.Mobile ? "primary" : "default"}
                onClick={() => this.toggleMobile()}
              />
            </Flex>
          </Flex>
          <Flex align="center" justify="center">
            {renderErrors()}
            {renderIFrame()}
          </Flex>
        </Flex>
      </ThemeProvider>
    );
  }
}

export default EmailPreview;
