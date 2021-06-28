export default {
  name: "emailSection",
  title: "Section",
  description: "Email Section",
  type: "object",
  fields: [
    {
      name: "backgroundColor",
      title: "Background Colour",
      type: "string",
    },
    {
      name: "fullWidth",
      title: "Full Width Section",
      type: "boolean",
    },
    {
      name: "columns",
      title: "Columns",
      type: "array",
      of: [{ type: "emailColumn" }],
    },
  ],
};
