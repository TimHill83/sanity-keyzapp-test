export default {
  name: "articleText",
  title: "Article",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        annotations: [
          {
            name: "relatedTerm",
            title: "Related Term",
            type: "internalLink",
          },
        ],
      },
    },
  ],
};
