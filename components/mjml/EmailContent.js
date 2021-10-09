import React from "react";
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
  small: (props) => <mj-text mj-class="small">{props.children}</mj-text>,
  smallCentred: (props) => <mj-text mj-class="small centred">{props.children}</mj-text>,
  richImage: RichImage,
  button: EmailButton2,
  container: NoWrapper,
  unknownType: NotFound, //pretty sure this isn't working
};

function EmailContent(props) {
  const { content } = props;
  return <PortableText content={content.content} serializers={serializers}></PortableText>;
}

export default EmailContent;
