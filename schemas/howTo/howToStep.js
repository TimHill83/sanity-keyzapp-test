import basicText from "../keyzappedia/fields/basicText";
import { fields, fieldGroupList } from "../keyzappedia/fields/corefields";
import { FaRegCheckSquare } from "react-icons/fa";

export default {
  name: "howToStep",
  type: "document",
  icon: FaRegCheckSquare,
  groups: fieldGroupList(),
  fields: [
    {
      ...basicText,
      name: "instruction",
      // type: "string",
      title: "Instruction",
      description: "State clearly what the step will achieve",
    },
    {
      name: "stepImage",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "altText",
          title: "Alt Text",
          type: "string",
        },
      ],
      options: { hotspot: true },
    },
    {
      name: "stepDetails",
      type: "array",
      of: [{ type: "stepText" }, { type: "highlightText" }],
    },
    fields.referringDocuments,
  ],
};
