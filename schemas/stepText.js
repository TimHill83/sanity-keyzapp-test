import basicText from "./keyzappedia/fields/basicText";

export default {
  name: "stepText",
  type: "object",
  fields: [
    {
      name: "Text",
      ...basicText,
    },
  ],
};
