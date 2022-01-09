export default {
  name: "articleText",
  title: "Article Text",
  description: "An article that explains or describes something",
  type: "object",
  fields: [
    {
      name: "content",
      title: "Content",
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
    },
  ],
};
