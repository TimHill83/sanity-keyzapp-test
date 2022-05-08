import linksList from "../fields/linksList";
import { fields, fieldGroupList, fieldsets } from "../fields/corefields";
import { HiOutlineDocumentText } from "react-icons/hi";
export default {
  name: "term",
  type: "document",
  title: "Term or Concept",
  icon: HiOutlineDocumentText,
  groups: fieldGroupList({ name: "synonyms", title: "Synonyms" }), //fieldgroups,

  fieldsets: [fieldsets.basicInfo, fieldsets.images],
  fields: [
    {
      ...fields.name,
      title: "Canonical Name",
      description: "The main (canonical) name for the term",
      fieldset: fieldsets.basicInfo.name,
      group: ["core"],
    },
    {
      ...fields.synonyms,
      group: "synonyms",
    },
    fields.slug,
    { ...fields.summaryImage, fieldset: "images" },
    fields.internalDescription,
    fields.articleContent,
    {
      ...linksList,
      group: "links",
    },
    fields.referringDocuments,
  ],
};
