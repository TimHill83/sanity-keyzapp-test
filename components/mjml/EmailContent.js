import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import RichImageBlock from "./RichImageBlock";
import EmailButton from "./EmailButton";
import PortableText from "react-portable-text";
import RichImage from "./RichImage";
import EmailButton2 from "./EmailButton2";

//this component stops the default block rendering behaviour of wrapping everything in a div, by using a Fragment instead
const NoWrapper = (props) => <>{props.children}</>;
const NotFound = (props) => <mj-text color="red">Component not found: {props.node._type}</mj-text>;

const serializers = {
  normal: (props) => <mj-text mj-class="normal">{props.children}</mj-text>,
  h1: (props) => <mj-text mj-class="h1">{props.children}</mj-text>,
  h2: (props) => <mj-text mj-class="h2">{props.children}</mj-text>,
  h3: (props) => <mj-text mj-class="h3">{props.children}</mj-text>,
  h4: (props) => <mj-text mj-class="h4">{props.children}</mj-text>,
  h5: (props) => <mj-text mj-class="h5">{props.children}</mj-text>,
  ul: (props) => (
    <mj-text>
      <ul>{props.children}</ul>
    </mj-text>
  ),
  richImage: RichImage,
  button: EmailButton2,
  container: NoWrapper, //not sure if this is working
  unknownType: NotFound, //pretty sure this isn't working
};

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
  //   return <mj-text mj-class={"h${level}"}>{props.children}</mj-text>;
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
  return <PortableText content={content.content} serializers={serializers}></PortableText>;
}

export default EmailContent;
