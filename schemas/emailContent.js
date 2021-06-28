export default {
  name: "emailContent",
  title: "Email Content",
  description: "Rich Text content",
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
            { title: "Small", value: "small" },
            { title: "Small - Centred", value: "small-centred" },
          ],
        },
        {
          type: "button",
        },
        { type: "image" },
      ],
    },
  ],
};
