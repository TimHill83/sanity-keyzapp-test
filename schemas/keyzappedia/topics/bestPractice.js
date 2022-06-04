import linksList from "../fields/linksList";
import { fields, fieldGroupList, fieldsets } from "../fields/corefields";
import { GoMortarBoard } from "react-icons/go";

export default {
  name: "bestPractice",
  type: "document",
  title: "Best Practice",
  description:
    "A Best Practice is a set of recommendations for working most effectively",
  icon: GoMortarBoard,
  groups: fieldGroupList(), //fieldgroups,
  fieldsets: [fieldsets.basicInfo, fieldsets.images],
  fields: [
    {
      ...fields.name,
      title: "Best Practice Name",
      description: "The name of the Best Practice",
    },
    {
      name: "relatesTo",
      title: "Relates To",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "term" },
            { type: "company" },
            { type: "industry" },
            { type: "technologyProduct" },
          ],
        },
      ],
      options: {
        layout: "tags",
      },
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
    fields.referringDocuments,
  ],
};
