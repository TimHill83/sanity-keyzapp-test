import basicText from "../keyzappedia/fields/basicText";
import { fields, fieldGroupList } from "../keyzappedia/fields/corefields";
import { BsArrowBarDown } from "react-icons/bs";

export default {
  name: "stepOutcome",
  type: "object",
  title: "Outcome",
  description: "Use this to descibe the outcome of a previous step",
  icon: BsArrowBarDown,
  groups: fieldGroupList(),
  fields: [
    {
      ...basicText,
      name: "outcome",
      // type: "string",
      title: "Outcome",
      description: "State the outcome",
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
