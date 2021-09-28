import React, { Fragment } from "react";
import client from "part:@sanity/base/client";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function renderMjmlImageTag(props) {
  return;
  `<mj-image src=` +
    urlFor(props.image)
      .width(props.content.targetWidth ?? 620)
      .format("png")
      .url() +
    `/>`;
}

function RichImage(props) {
  return (
    //<mj-raw>Image</mj-raw>
    <mj-image
      src={urlFor(props.content)
        .width(props.content.targetWidth ?? 620)
        .format("png")
        .url()}
    />
  );
}

export default RichImage;
