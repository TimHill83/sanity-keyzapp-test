import React from "react";
import EmailColumn from "./EmailColumn";

function EmailSection(props) {
  const { backgroundColor, fullWidth, columns } = props;

  return (
    <mj-section
      full-width={fullWidth ? "full-width" : null}
      text-align="left"
      background-color={backgroundColor}
      padding="0px 10px"
    >
      {columns.map((column) => {
        return <EmailColumn column={column}></EmailColumn>;
      })}
    </mj-section>
  );
}

export default EmailSection;
