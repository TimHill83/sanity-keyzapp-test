import linksList from "./fields/linksList";
import { fields, fieldGroupList } from "./fields/corefields";

export default {
  name: "standard",
  type: "document",
  title: "Standard",
  description: "A Standard is set of expections that we are expected to observe",
  groups: fieldGroupList(), //fieldgroups,
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
      title: "Standard Name",
      description: "The name of the standard",
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
