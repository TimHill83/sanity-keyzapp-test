import linksList from "./fields/linksList";
import { fields, fieldGroupList } from "./fields/corefields";
import { RiArticleLine } from "react-icons/ri";

export default {
  name: "article", //Needs to be updated
  type: "document",
  title: "Article",
  description: "A general purpose article about something in our business",
  icon: RiArticleLine,
  groups: fieldGroupList(), //fieldgroups,
  fieldsets: [
    {
      name: "termdata",
      title: "Basic information",
      options: {
        columns: 2,
        collapsible: true,
        collapsed: false, //note: not currently possible to collapse based on a callback, like hidden
      },
    },
  ],
  fields: [
    {
      ...fields.name,
      title: "Title",
      description: "The article title",
      fieldset: "termdata",
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
      options: {
        layout: "tags",
      },
    },
    {
      ...fields.synonyms,
    },
    {
      ...fields.slug,
    },

    {
      ...fields.summaryImage,
    },
    {
      ...fields.internalDescription,
      group: ["core", "article"],
    },
    {
      name: "article",
      type: "reference",
      to: [{ type: "articleContent" }],
      group: ["core", "article"],
    },
    {
      ...fields.articleText,
      group: "core",
    },
    {
      ...linksList,
      group: "links",
    },
    fields.referringDocuments,
  ],
};
