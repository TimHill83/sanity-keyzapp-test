import ReferencedBy from "../../components/inputs/ReferencedBy"; //using recipe from https://www.sanity.io/schemas/list-referring-documents-backlinks-in-sanity-1a8ada64
import articleText from "./fields/articleText";
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
    {
      //using recipe from https://www.sanity.io/schemas/list-referring-documents-backlinks-in-sanity-1a8ada64
      name: "referringDocuments",
      title: "Referenced By",
      type: "array",
      of: [{ type: "term" }],
      readOnly: true,
      inputComponent: ReferencedBy,
      // Optional: You can read this option in ReferencedBy.tsx to filter the list
      // of backlinks by document type.
      // options: {
      //   referenceType: 'course',
      // },
    },
  ],
};
