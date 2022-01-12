export default {
  name: "baseImage",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    {
      name: "altText",
      title: "Alternative Text",
      description: "Text describing the image if it is not viewable",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
};
