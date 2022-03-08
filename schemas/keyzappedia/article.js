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
      },
    },
  ],
  fields: [
    {
      ...fields.name,
      title: "Title",
      description: "The article tiutle",
      fieldset: "termdata",
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
    fields.internalDescription,
    fields.articleText,
    {
      ...linksList,
      group: "links",
    },
    fields.referringDocuments,
  ],
};
