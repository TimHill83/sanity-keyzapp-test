export default {
  name: "richImage",
  title: "Rich Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    {
      name: "targetWidth",
      title: "Target Width",
      description: "Specify a target output width for the image",
      type: "number",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "altText",
      title: "Alternative Text",
      description: "Text describing the image if it is not viewable",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
  ],
};
