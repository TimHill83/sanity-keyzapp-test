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
      options: {
        columns: 2,
        hidden: ({ document }) => {
          document?.linkedToItem;
        },
      },
    },
  ],
  fields: [
    {
      title: "Linked to another item?",
      name: "linkedToItem",
      type: "boolean",
      description: "Is this article part of another item, or should it be read by itself?",
    },
    { ...fields.name, title: "Title", description: "The article title", fieldset: "termdata" },
    {
      title: "Content",
      name: "content",
      description: "The content of the article",
      type: "array",
      of: [
        { type: "articleText" },
        // {
        //   type: "highlightText",
        // },
      ],
      group: "core",
    },

    {
      name: "relatesTo",
      title: "Relates To",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "term" }, { type: "company" }, { type: "industry" }, { type: "technologyProduct" }],
        },
      ],
      options: {
        layout: "tags",
      },
    },

    fields.synonyms,
    fields.slug,
    fields.summaryImage,
    {
      ...fields.internalDescription,
      group: ["core", "article"],
    },
    fields.articleText,
    {
      ...linksList,
      group: "links",
    },
    fields.referringDocuments,
  ],
};
