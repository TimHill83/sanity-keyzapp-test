import React from "react";
import RichImage from "./RichImage";

function RichImageBlock(props) {
  console.log("Image");
  console.log(props);
  return <RichImage content={props.node}></RichImage>;
}

export default RichImageBlock;
