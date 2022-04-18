import basicText from "./fields/basicText";
import { RiQuestionnaireLine } from "react-icons/ri";
import keyzappediaTypes from "./keyzappediaTypes";
import { fields, fieldGroupList } from "./fields/corefields";
export default {
  name: "question",
  type: "document",
  title: "Question",
  description: "Text that allows special formatting",
  icon: RiQuestionnaireLine,
  groups: fieldGroupList(),
  fields: [
    {
      title: "Question",
      ...fields.name,
    },

    {
      title: "Answer",
      ...fields.internalDescription,
    },
    {
      name: "relatedTo",
      title: "Relevant To",
      description: "Add the subjects where this question is relevant",
      type: "array",
      of: [
        {
          type: "reference",
          to: keyzappediaTypes,
        },
      ],
    },
    { ...fields.slug, fieldset: "" },
    fields.referringDocuments,
  ],
};
