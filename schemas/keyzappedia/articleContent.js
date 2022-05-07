import linksList from "./fields/linksList";
import { fields, fieldGroupList } from "./fields/corefields";
import { RiArticleLine } from "react-icons/ri";

export default {
  name: "articleContent",
  type: "document",
  title: "Article Content",
  description: "Article content that is about a topic",
  icon: RiArticleLine,
  __experimental_search: [],
  groups: fieldGroupList(), //fieldgroups,
  // fieldsets: [
  //   {
  //     name: "termdata",
  //     title: "Basic information",
  //     hidden: ({ document }) => {
  //       return !document?.standalone;
  //     },

  //     options: {
  //       columns: 2,
  //       collapsible: true,
  //       collapsed: false, //note: not currently possible to collapse based on a callback, like hidden
  //     },
  //   },
  //   {
  //     name: "articleSetup",
  //     title: "Article Setup",
  //     options: {
  //       columns: 2,
  //       collapsible: true,
  //       collapsed: false,
  //     },
  //   },
  // ],
  fields: [
    // {
    //   title: "Standalone",
    //   name: "standalone",
    //   type: "boolean",
    //   description: "Standalone articles exist in their own right",
    //   validation: (Rule) => Rule.required(),
    //   group: "core",
    //   fieldset: "articleSetup",
    // },

    {
      ...fields.name,
      title: "Title",
      description: "The article title",
      // fieldset: "termdata",
      // validation: (Rule) =>
      //   Rule.custom((value, context) => {
      //     if (!value && context.document.standalone) {
      //       return "A title is required for standalone articles";
      //     }
      //     return true;
      //   }),
    },
    // {
    //   title: "Content",
    //   name: "content",
    //   description: "The content of the article",
    //   type: "array",
    //   of: [
    //     { type: "articleText" },
    //     {
    //       type: "highlightText",
    //     },
    //     { type: "dataView" },
    //   ],
    //   group: "core",
    //   options: {},
    // },

    // {
    //   name: "relatesTo",
    //   title: "Relates To",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [
    //         { type: "term" },
    //         { type: "company" },
    //         { type: "industry" },
    //         { type: "technologyProduct" },
    //       ],
    //     },
    //   ],
    //   hidden: ({ document }) => {
    //     return !document?.standalone;
    //   },
    //   options: {
    //     layout: "tags",
    //   },
    // },
    // {
    //   ...fields.synonyms,
    //   hidden: ({ document }) => {
    //     return !document?.standalone;
    //   },
    // },
    // {
    //   ...fields.slug,
    //   // hidden: ({ document }) => {
    //   //   return !document?.standalone;
    //   // },
    //   validation: (Rule) =>
    //     Rule.custom((value, context) => {
    //       if (!value && context.document.standalone) {
    //         return "A slug is required for standalone articles";
    //       }
    //       return true;
    //     }),
    // },

    // {
    //   ...fields.summaryImage,
    //   hidden: ({ document }) => {
    //     return !document?.standalone;
    //   },
    // },
    // {
    //   ...fields.internalDescription,
    //   group: ["core", "article"],
    //   hidden: ({ document }) => {
    //     return !document?.standalone;
    //   },
    // },
    {
      ...fields.articleText,
      // hidden: ({ document }) => {
      //   return !document?.standalone;
      // },
      group: "core",
    },
    //   {
    //     ...linksList,
    //     group: "links",
    //     hidden: ({ document }) => {
    //       return !document?.standalone;
    //     },
    //   },
    //   fields.referringDocuments,
  ],
  // validation: (Rule) =>
  //   Rule.custom((fields) => {
  //     if (fields.standalone && !fields.title) {
  //       return "Standalone articles must have a title";
  //     }
  //     return true;
  //   }),
};
