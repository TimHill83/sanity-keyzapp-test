import linksList from "./fields/linksList";
import { fields, fieldgroups } from "./fields/corefields";

export default {
  name: "term",
  type: "document",
  title: "Term",
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
      description: "The main (canonical) name for the term",
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
    fields.referringDocuments,
  ],
};
