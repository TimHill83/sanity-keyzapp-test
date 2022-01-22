import linksList from "./fields/linksList";
import { fields, fieldgroups } from "./fields/corefields";

export default {
  name: "company",
  type: "document",
  title: "Company",
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
      title: "Company Name",
      description: "The Company's Name",
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
      name: "parentCompany",
      title: "Parent Company",
      type: "reference",
      to: [{ type: "company" }],
    },
    fields.referringDocuments,
  ],
};
