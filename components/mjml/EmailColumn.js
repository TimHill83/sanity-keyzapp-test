import React from "react";

function EmailColumn(props) {
  const { column } = props;
  return (
    <mj-column
      width={column.width ? column.width + "%" : null}
      vertical-align={column.verticalAligment}
      key={column._key}
    >
      <mj-text>Column</mj-text>
    </mj-column>
  );
}

export default EmailColumn;
