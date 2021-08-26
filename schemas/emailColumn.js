export default {
  name: "emailColumn",
  title: "Column",
  type: "object",
  fields: [
    {
      name: "width",
      title: "Column Width",
      description: "Percentage width of the column (Leave blank for auto)",
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
  preview: {
    select: {
      blocks: "content.content",
    },
    prepare(value) {
      const block = (value.blocks || []).find((block) => block._type === "block");
      const image = (value.blocks || []).find((image) => image._type === "image");
      return {
        title: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "(No text)",
        media: image,
      };
    },
    // component: `<div>Hello</div>`,
  },
};
