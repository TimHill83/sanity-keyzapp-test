import linksList from "./fields/linksList";
import { fields, fieldGroupList } from "./fields/corefields";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export default {
  name: "company",
  type: "document",
  title: "Company",
  icon: HiOutlineOfficeBuilding,
  groups: fieldGroupList([{ name: "company", title: "Company" }]),
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
    { ...fields.website, group: "links" },
    {
      ...linksList,
      group: "links",
    },
    {
      name: "parentCompany",
      title: "Parent Company",
      type: "reference",
      to: [{ type: "company" }],
      group: "company",
    },
    {
      name: "relationshipToKeyzappCompany",
      title: "Relationship to Keyzapp",
      type: "string",
      options: {
        list: [
          { title: "Supplier", value: "supplier" },
          { title: "Potential Partner", value: "potentialPartner" },
          { title: "Commerical Partner", value: "commercialPartner" },
          { title: "Integration Partner", value: "integrationPartner" },
          { title: "Competitor", value: "competitor" },
          { title: "Competitor and Partner", value: "competitorPartner" },
          { title: "Operates in our Ecosystem", value: "ecosystem" },
        ],
      },
      group: "company",
    },
    fields.referringDocuments,
  ],
};
