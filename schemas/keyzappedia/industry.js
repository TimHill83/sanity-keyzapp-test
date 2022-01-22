import linksList from "./fields/linksList";
import { fields, fieldgroups } from "./fields/corefields";

export default {
  name: "industry",
  type: "document",
  title: "Industry Sector",
  groups: fieldgroups,
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
      description: "The name of the industry",
      fieldset: "termdata",
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
    {
      name: "parentIndustry",
      title: "Parent Industry Sector",
      type: "reference",
      to: [{ type: "industry" }],
      group: "core",
    },
    fields.referringDocuments,
  ],
};
