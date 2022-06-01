export default {
  type: "array",
  of: [
    {
      type: "block",
      styles: [],
      marks: {
        annotations: [
          {
            name: "relatedTerm",
            title: "Related Term",
            type: "internalLink",
          },
          {
            name: "externalLink",
            title: "Link",
            type: "externalLink",
          },
        ],
      },
    },
  ],
};
