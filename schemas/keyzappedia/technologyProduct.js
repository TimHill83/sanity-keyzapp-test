import ReferencedBy from "../../components/inputs/ReferencedBy"; //using recipe from https://www.sanity.io/schemas/list-referring-documents-backlinks-in-sanity-1a8ada64
import linksList from "./fields/linksList";
import { fields, fieldgroups } from "./fields/corefields";

export default {
  name: "technologyProduct",
  type: "document",
  title: "Technology Product",
  groups: [
    ...fieldgroups,
    {
      name: "product",
      title: "Product",
    },
    {
      name: "references",
      title: "References",
    },
  ],
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
      title: "Product Name",
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
      name: "madeBy",
      title: "Made By",
      type: "reference",
      to: [{ type: "company" }],
      group: "product",
    },
    {
      name: "targetIndustries",
      title: "Target Industry Sectors",
      type: "array",
      of: [{ title: "Industry", type: "reference", to: [{ type: "industry" }] }],

      group: "product",
    },
    fields.referringDocuments,
  ],
};
