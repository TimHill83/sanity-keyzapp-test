import linksList from "../fields/linksList";
import { fields, fieldGroupList, fieldsets } from "../fields/corefields";
import { RiArticleLine } from "react-icons/ri";

export default {
  name: "article", //Needs to be updated
  type: "document",
  title: "Article",
  description: "A general purpose article about something in our business",
  icon: RiArticleLine,
  groups: fieldGroupList(), //fieldgroups,
  fieldsets: [fieldsets.basicInfo],
  fields: [
    {
      ...fields.name,
      title: "Title",
      description: "The article title",
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
    fields.articleContent,
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
