import React from "react";
function InlineHtml(props) {
  return (
    <iframe
      style={{ width: props.mobile ? "320px" : "90%", minWidth: "800px", height: "900px", margin: "10px" }}
      srcDoc={props.content}
      //dangerouslySetInnerHTML={{ __html: props.content
      //}}
    />
  );
}

export default InlineHtml;
