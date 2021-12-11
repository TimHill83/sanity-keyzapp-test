import React from "react";

function EmailButton2(props) {
  const { link, alignment, text } = props;

  return (
    <mj-button href={link} align={alignment}>
      {text}
    </mj-button>
  );
}

export default EmailButton2;
