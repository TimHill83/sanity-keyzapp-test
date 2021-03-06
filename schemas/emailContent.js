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
            { title: "Heading 4", value: "h4" },
            { title: "Small", value: "small" },
            { title: "Small - Centred", value: "smallCentred" },
          ],
        },
        {
          type: "button",
        },
        { type: "image" },
        { type: "richImage" },
      ],
    },
  ],
};
