export default {
  name: "textSection",
  title: "Text Section",
  description: "A Basic Rich Text Document",
  type: "object",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
          ],
        },
        {
          type: "button",
        },
      ],
    },
  ],
};
