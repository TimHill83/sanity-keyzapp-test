import React from "react";

function EmailSection(props) {
  const { backgroundColor, fullWidth } = props;

  return (
    <mj-section
      full-width={fullWidth ? "full-width" : null}
      text-align="left"
      background-color={backgroundColor}
      padding="0px 10px"
    >
      <mj-column>
        <mj-text font-weight="700" color="#19196A" padding-bottom="0" padding="25px 0 0 0">
          EmailSection
        </mj-text>
      </mj-column>
    </mj-section>
  );
}

export default EmailSection;
