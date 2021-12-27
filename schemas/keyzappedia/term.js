export default {
  name: "term",
  type: "document",
  title: "Term",
  fields: [
    {
      name: "canonicalName",
      title: "Term",
      type: "string",
    },
    {
      name: "internalDescription",
      title: "Internal Description",
      description: "What the term means",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
        },
      ],
    },
  ],
};
