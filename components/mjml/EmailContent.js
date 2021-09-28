import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import RichImageBlock from "./RichImageBlock";

//this component stops the default block rendering behaviour of wrapping everything in a div, by using a Fragment instead
const NoWrapper = (props) => <>{props.children}</>;
const NotFound = (props) => <mj-text color="red">Component not found: {props.node._type}</mj-text>;

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node; // not entirely sure what this does.
  // Style handing examples
  // //how to render the normal style
  // if (style === "normal") {
  //   return <mj-text mj-class="normal">{props.children}</mj-text>;
  // }

  // //how to render headings
  // if (/^h\d/.test(style)) {
  //   const level = style.replace(/[^\d]/g, "");
  //   return <mj-text mj-class={`h${level}`}>{props.children}</mj-text>;
  // }

  // //how to render the small style
  // if (style === "small") {
  //   return <mj-text mj-class="small">{props.children}</mj-text>;
  // }

  // if (style === "blockquote") {
  //   return <blockquote>- {props.children}</blockquote>;
  // }

  return <mj-text mj-class={style}>{props.children}</mj-text>;

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

function EmailContent(props) {
  const { content } = props;
  return (
    <BlockContent
      blocks={content.content}
      serializers={{
        types: {
          block: BlockRenderer,
          richImage: RichImageBlock,
        },
        container: NoWrapper,
        unknownType: NotFound,
      }}
    ></BlockContent>
  );
}

export default EmailContent;
