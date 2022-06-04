import {
  fields,
  fieldGroupList,
  fieldsets,
} from "./keyzappedia/fields/corefields";
import { TbListNumbers } from "react-icons/tb";

export default {
  name: "howTo",
  type: "document",
  icon: TbListNumbers,
  groups: fieldGroupList([
    {
      name: "howTo",
      title: "How To",
      default: true,
    },
  ]), //fieldgroups,
  fieldsets: [fieldsets.basicInfo, fieldsets.images],
  fields: [
    {
      ...fields.name,
      title: "Title",
      description: "What does this 'How-To' enable you to do?",
      fieldset: null,
      group: ["core", "howTo"],
    },
    {
      ...fields.internalDescription,
      title: "Description",
      description: "A short summary of the How-To",
    },
    fields.summaryImage,
    {
      name: "steps",
      type: "array",
      of: [
        {
          type: "howToStep",
          title: "Step",
        },
        {
          type: "reference",
          title: "Step from Library",
          to: [{ type: "howToStep" }],
        },
      ],
      group: "howTo",
    },
  ],
};
