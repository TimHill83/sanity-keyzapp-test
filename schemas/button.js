export default {
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "string",
    },
    {
      title: "Link",
      name: "link",
      type: "url",
    },
    {
      title: "Alignment",
      name: "alignment",
      type: "string",
      options: {
        list: ["left", "center", "right"],
      },
    },
  ],
};
