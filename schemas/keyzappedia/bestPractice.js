import linksList from "./fields/linksList";
import { fields, fieldGroupList } from "./fields/corefields";

export default {
  name: "bestPractice",
  type: "document",
  title: "Best Practice",
  description: "A Best Practice is a set of recommendations for working most effectively",
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
      title: "Standard Name",
      description: "The name of the standard",
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
