import React from "react";
import RichImage from "./RichImage";

function TitleBlock(props) {
  const { title, subtitle, image } = props;

  return (
    <mj-section full-width="full-width" text-align="left" background-color="#ffffff" padding="0px 10px">
      <mj-column width="75%">
        <mj-text font-weight="700" color="#19196A" padding-bottom="0" padding="25px 0 0 0">
          {subtitle}
        </mj-text>
        <mj-text mj-class="h1" padding="0">
          {title}
        </mj-text>
      </mj-column>
      <mj-column width="25%">
        <RichImage {...image}></RichImage>
      </mj-column>
    </mj-section>
  );
}

export default TitleBlock;
