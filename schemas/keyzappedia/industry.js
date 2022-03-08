import linksList from "./fields/linksList";
import { fields, fieldGroupList } from "./fields/corefields";
import { RiNodeTree } from "react-icons/ri";

export default {
  name: "industry",
  type: "document",
  title: "Industry Sector",
  icon: RiNodeTree,
  groups: fieldGroupList(),
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
