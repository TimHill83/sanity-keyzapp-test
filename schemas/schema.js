// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import email from "./email";
import titleBlock from "./titleBlock";
import textSection from "./textSection";
import button from "./button";
import emailContent from "./emailContent";
import twoColumnSection from "./twoColumnSection";
import emailColumn from "./emailColumn";
import emailSection from "./emailSection";
import richImage from "./richImage";
import internalLink from "./internalLink";
import externalLink from "./externalLink";
import baseImage from "./baseImage";
import highlightText from "./keyzappedia/highlightText";
import dataView from "./keyzappedia/dataView";
import articleContent from "./keyzappedia/articleContent";
import { topicSchemas } from "./keyzappedia/topics/";
import howTo from "./howTo";
import howToStep from "./howToStep";
import stepText from "./stepText";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    email,
    titleBlock,
    textSection,
    button,
    emailContent,
    twoColumnSection,
    emailColumn,
    emailSection,
    richImage,
    baseImage,
    internalLink,
    externalLink,
    highlightText,
    dataView,
    articleContent,
    stepText,
    howToStep,
    howTo,
    ...topicSchemas,
  ]),
});
