import linksList from "./fields/linksList";
import { fields, fieldGroupList, fieldsets } from "./fields/corefields";
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
  fieldsets: [fieldsets.basicInfo],
  fields: [
    {
      ...fields.name,
      title: "Product Name",
      description: "The Company's Name",
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
      name: "primaryCategory",
      type: "string",
      options: {
        list: [
          { title: "CRM", value: "crm" },
          { title: "Key Management", value: "keyManagement" },
          { title: "Finanicial Managament", value: "financialManagement" },
          { title: "Online Advertising", value: "onlineAdvertising" },
          { title: "Property Portals", value: "propertyPortal" },
          { title: "Security Tools", value: "security" },
          { title: "Content Creation & Deployment", value: "contentCreation" },
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
      of: [
        { title: "Industry", type: "reference", to: [{ type: "industry" }] },
      ],

      group: "product",
    },
    { ...fields.referringDocuments, group: "references" },
  ],
};
