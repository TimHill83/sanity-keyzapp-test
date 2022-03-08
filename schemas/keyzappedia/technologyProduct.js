import linksList from "./fields/linksList";
import { fields, fieldGroupList } from "./fields/corefields";
import { HiOutlineDesktopComputer } from "react-icons/hi";

export default {
  name: "technologyProduct",
  type: "document",
  title: "Technology Product",
  icon: HiOutlineDesktopComputer,
  groups: fieldGroupList([
    {
      name: "product",
      title: "Product",
    },
  ]),
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
      name: "relationshipToKeyzappProduct",
      title: "Relationship to Keyzapp",
      type: "string",
      options: {
        list: [
          { title: "Tool we use", value: "usedAtKeyzapp" },
          { title: "Integrated with Keyzapp", value: "integration" },
          { title: "Potential to Integrate", value: "potentialIntegration" },
          { title: "Competitor", value: "competitor" },
          { title: "Competitor and Partner", value: "competitorPartner" },
          { title: "Used by our target market", value: "ecosystem" },
        ],
      },
      group: "product",
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
    { ...fields.referringDocuments, group: "references" },
  ],
};
