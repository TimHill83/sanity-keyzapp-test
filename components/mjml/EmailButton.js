import React from "react";

function EmailButton(props) {
  const { link, alignment, text } = props.node;

  return (
    <mj-button href={link} align={alignment}>
      {text}
    </mj-button>
  );
}

export default EmailButton;
