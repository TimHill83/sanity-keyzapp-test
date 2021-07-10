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
    },
  ],
};
