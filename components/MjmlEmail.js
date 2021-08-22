import React, { Component } from "react";
import MjmlEmailContent from "./MjmlEmailContent";

class MjmlEmail extends Component {
  render() {
    // return <mjml>{this.props.email.preHeader}</mjml>;
    return (
      <mjml>
        <mj-head>
          <mj-preview>{this.props.preHeader}</mj-preview>
          <mj-attributes>
            <mj-text font-size="16px" line-height="24px" font-family="Arial, sans-serif" padding="0px" />
            <mj-class name="normal" padding-bottom="10px" />
            <mj-class name="h1" color="#009ee2" font-size="36px" line-height="42px" font-weight="600" />
            <mj-class name="h2" color="#009ee2" font-size="28px" line-height="36px" font-weight="600" />
            <mj-class name="h3" color="#19196a" font-size="18px" padding="0px" font-weight="600" />
            <mj-class name="h4" color="#009ee2" font-size="18px" padding="0px" font-weight="600" />
            <mj-class name="small" font-size="14px" line-height="16px" padding-top="14px" />
            <mj-class name="centred" align="center" />
            <mj-class name="linkbox" width="30%" background-color="#eeeeee" border-radius="3px" />
            <mj-class name="spacer" width="10px" padding-bottom="10px" />
            <mj-class name="ribbon" background-color="#009ee2" full-width="full-width" padding="5px" />
            <mj-class name="footer" background-color="#eeeeee" full-width="full-width" padding="5px" font-size="10px" />
            <mj-button background-color="#009ee2" font-size="16px" color="#ffffff" padding="10px 0px" />
            <mj-all font-family="Arial" />
          </mj-attributes>
          <mj-style inline="inline">
            {`
        a { color: #009ee2;  }
            .unsubscribe-link {color: #cccccc;}
    `}
          </mj-style>
        </mj-head>
        <mj-body background-color="#ffffff" width="640px">
          <mj-raw> {`{{ snippets.test_data }}`}</mj-raw>
          <mj-section mj-class="ribbon"></mj-section>
          <mj-section>
            <mj-column>
              <mj-text>Content Starts Here</mj-text>
            </mj-column>
          </mj-section>
          <MjmlEmailContent emailContent={this.props.email.content}></MjmlEmailContent>
          <mj-section mj-class="ribbon"></mj-section>
          <mj-section padding="10px 20px" full-width="full-width">
            <mj-column>
              <mj-text mj-class="small" font-size="10px" color="#cccccc">
                This email is sent by Zapp Innovation Ltd, based at {`{{ html_postal_address }}`}. You can{" "}
                <a className="unsubscribe-link" href="{{ unsubscribe_url }}">
                  Unsubscribe
                </a>{" "}
                from all non-essential emails.
              </mj-text>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    );
  }
}

export default MjmlEmail;
