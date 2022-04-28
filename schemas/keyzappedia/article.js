import linksList from "./fields/linksList";
import { fields, fieldGroupList } from "./fields/corefields";
import { RiArticleLine } from "react-icons/ri";

export default {
  name: "article",
  type: "document",
  title: "Article",
  description: "A general purpose article about something in our business",
  icon: RiArticleLine,
  groups: fieldGroupList(), //fieldgroups,
  fieldsets: [
    {
      name: "termdata",
      title: "Basic information",
      hidden: ({ document }) => {
        return document?.linkedToItem;
      },

      options: {
        columns: 2,
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    {
      title: "Linked to another item?",
      name: "linkedToItem",
      type: "boolean",
      description:
        "Is this article part of another item, or should it be read by itself?",
      group: "core",
    },

    {
      ...fields.name,
      title: "Title",
      description: "The article title",
      fieldset: "termdata",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (!value && !context.document.linkedToItem) {
            return "A title is required for standalone articles";
          }
          return true;
        }),
    },
    {
      title: "Content",
      name: "content",
      description: "The content of the article",
      type: "array",
      of: [
        { type: "articleText" },
        {
          type: "highlightText",
        },
        { type: "dataView" },
      ],
      group: "core",
      options: {},
    },

    {
      name: "relatesTo",
      title: "Relates To",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "term" },
            { type: "company" },
            { type: "industry" },
            { type: "technologyProduct" },
          ],
        },
      ],
      hidden: ({ document }) => {
        return document?.linkedToItem;
      },
      options: {
        layout: "tags",
      },
    },
    {
      ...fields.synonyms,
      hidden: ({ document }) => {
        return document?.linkedToItem;
      },
    },
    {
      ...fields.slug,
      // hidden: ({ document }) => {
      //   return document?.linkedToItem;
      // },
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (!value && !context.document.linkedToItem) {
            return "A slug is required for standalone articles";
          }
          return true;
        }),
    },

    {
      ...fields.summaryImage,
      hidden: ({ document }) => {
        return document?.linkedToItem;
      },
    },
    {
      ...fields.internalDescription,
      group: ["core", "article"],
      hidden: ({ document }) => {
        return document?.linkedToItem;
      },
    },
    {
      ...fields.articleText,
      hidden: ({ document }) => {
        return document?.linkedToItem;
      },
    },
    {
      ...linksList,
      group: "links",
      hidden: ({ document }) => {
        return document?.linkedToItem;
      },
    },
    fields.referringDocuments,
  ],
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (!fields.linkedToItem && !fields.title) {
        return "Articles not for specific items must have a title";
      }
      return true;
    }),
};
