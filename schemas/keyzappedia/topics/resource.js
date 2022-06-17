import linksList from "../fields/linksList";
import { fields, fieldGroupList, fieldsets } from "../fields/corefields";
import { GrDocumentCloud } from "react-icons/gr";

export default {
  name: "resource",
  type: "document",
  title: "Key Documents / Resources",
  description: "A resource is a key document, or part of a system",
  icon: GrDocumentCloud,
  groups: fieldGroupList([{ name: "resource", title: "Resource" }]),
  fieldsets: [fieldsets.basicInfo, fieldsets.images],
  fields: [
    {
      ...fields.name,
      title: "Resource Name",
      description: "The Name of the Resource",
    },
    {
      name: "resourceLink",
      title: "Link to the resource",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
      group: ["core", "resource"],
    },
    fields.synonyms,
    fields.slug,
    fields.summaryImage,
    fields.internalDescription,
    fields.articleContent,
    {
      ...linksList,
      group: "links",
    },
    {
      name: "resourceType",
      title: "Resource Type",
      type: "string",
      options: {
        list: [
          { title: "Tool", value: "tool" },
          { title: "Template", value: "template" },
          { title: "Workspace", value: "worksapce" },
        ],
      },
      group: "resource",
    },

    {
      name: "productRef",
      title: "Product or Service",
      descrtipion:
        "The product or service where the resource is created and maintained",
      type: "reference",
      to: [{ type: "technologyProduct" }],
      group: "resource",
    },
    fields.referringDocuments,
  ],
};
