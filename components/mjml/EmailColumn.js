import React from "react";
import EmailContent from "./EmailContent";

function EmailColumn(props) {
  const { column } = props;
  return (
    <mj-column
      width={column.width ? column.width + "%" : null}
      vertical-align={column.verticalAlignment}
      key={column._key}
    >
      <EmailContent content={column.content}></EmailContent>
    </mj-column>
  );
}

export default EmailColumn;
