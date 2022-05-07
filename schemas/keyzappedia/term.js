import linksList from "./fields/linksList";
import { fields, fieldGroupList, fieldsets } from "./fields/corefields";
import { HiOutlineDocumentText } from "react-icons/hi";
export default {
  name: "term",
  type: "document",
  title: "Term or Concept",
  icon: HiOutlineDocumentText,
  groups: fieldGroupList({ name: "synonyms", title: "Synonyms" }), //fieldgroups,

  fieldsets: [
    fieldsets.basicInfo,
    {
      name: "images",
      title: "Images",
      options: {
        columns: 2,
        collapsible: true,
        collapsed: true,
      },
    },
  ],
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
      ...fields.articleText,
      // hidden: ({ document }) => {
      //   return !document?.articleText?.length > 0;
      // },
    },
    {
      ...linksList,
      group: "links",
    },
    fields.referringDocuments,
  ],
  // preview: {
  //   select: {
  //     _key: "_key",
  //     title: "canonicalName",
  //     type: "_type",
  //   },
  //   prepare({ _key, title, type }) {
  //     return { _key, title, type };
  //   },
  //   component: TermPreview,
  // },
};
