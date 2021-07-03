import React from "react";
function InlineHtml(props) {
  return <object style={{ width: "100%", height: "100%" }} dangerouslySetInnerHTML={{ __html: props.content }} />;
}

export default InlineHtml;
