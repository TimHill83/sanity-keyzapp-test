export default {
  name: "emailColumn",
  title: "Column",
  type: "object",
  fields: [
    {
      name: "width",
      title: "Column Width",
      description: "Percentage width of the column {Leave blank for auto)",
      type: "number",
    },
    {
      name: "verticalAlignment",
      title: "Vertical Alignment",
      type: "string",
      options: {
        list: ["top", "middle", "bottom"],
      },
    },
    {
      name: "content",
      title: "Content",
      type: "emailContent",
    },
  ],
};
