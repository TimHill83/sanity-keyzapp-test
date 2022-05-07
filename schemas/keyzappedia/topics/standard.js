import linksList from "../fields/linksList";
import { fields, fieldGroupList, fieldsets } from "../fields/corefields";
import { GrCertificate } from "react-icons/gr";

export default {
  name: "standard",
  type: "document",
  title: "Standard",
  description:
    "A Standard is set of expections that we are expected to observe",
  icon: GrCertificate,
  groups: fieldGroupList(), //fieldgroups,
  fieldsets: [fieldsets.basicInfo],
  fields: [
    {
      ...fields.name,
      title: "Standard Name",
      description: "The name of the standard",
    },
    fields.synonyms,
    fields.slug,
    fields.summaryImage,
    fields.internalDescription,
    fields.articleContent,
    fields.articleText,
    {
      ...linksList,
      group: "links",
    },
    fields.referringDocuments,
  ],
};
