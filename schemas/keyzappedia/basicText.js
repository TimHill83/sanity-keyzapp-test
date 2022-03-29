export default {
  name: "specialText",
  type: "object",
  title: "Special Text",
  description: "Text that allows special formatting",
  fields: [
    {
      name: "textType",
      type: "string",
      options: {
        list: ["Note", "Tip", "Warning", "Example"],
      },
    },

    fields.internalDescription,
  ],
};
