import React, { Component } from "react";

class mjmlcontent extends Component {
  render() {
    return (
      <mjml>
        <mj-head>
          <mj-preview>PreHeader</mj-preview>
          <mj-attributes>
            <mj-class name="ribbon" background-color="#009ee2" padding="5px" full-width="full-width" />
            <mj-class
              name="h1"
              color="#aaa"
              font-size="36px"
              line-height="38px"
              font-family="Muli, Arial, sans-serif"
            />
            <mj-class
              name="footer-text"
              color="#101010"
              font-size="10px"
              line-height="14px"
              font-family="Open Sans, Arial, Helvetica, sans-serif"
            />

            <mj-text font-size="16px" font-family="Open Sans, Arial, sans-serif" />
          </mj-attributes>
        </mj-head>
        <mj-body>
          <mj-section mj-class="ribbon"></mj-section>
          <mj-section background-color="#ffffff" full-width="full-width">
            <mj-column>
              <mj-text>Main Content goes here</mj-text>
            </mj-column>
          </mj-section>
          <mj-section background-color="#ccc" full-width="full-width">
            <mj-column>
              <mj-text padding-top="20px" mj-class="footer-text">
                This email was sent by Keyzapp on behalf of [[KeyzappAccountName]]. Please contact that company if you
                feel that this email is sent in error, or if any of the details above are not as expected. This is not a
                marketing email.
              </mj-text>
              <mj-text padding-top="20px" mj-class="footer-text">
                Keyzapp is a software service that helps companies manage their keys. Keyzapp is a registered trademark
                of Zapp Innovation Ltd. Registered in England under Company Number: 08977374. Registered address: 24,
                London Road West, Amersham, HP7 0EZ, United Kingdom.{" "}
              </mj-text>
            </mj-column>
          </mj-section>
          <mj-section mj-class="ribbon"></mj-section>
        </mj-body>
      </mjml>
    );
  }
}

export default mjmlcontent;
