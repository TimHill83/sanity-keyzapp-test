import linksList from "./fields/linksList";
import { fields, fieldGroupList } from "./fields/corefields";
import { HiOutlineDocumentText } from "react-icons/hi";
export default {
  name: "term",
  type: "document",
  title: "Term or Concept",
  icon: HiOutlineDocumentText,
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
      title: "Canonical Name",
      description: "The main (canonical) name for the term",
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
