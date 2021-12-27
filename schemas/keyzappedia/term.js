import ReferencedBy from "../../components/inputs/ReferencedBy"; //using recipe from https://www.sanity.io/schemas/list-referring-documents-backlinks-in-sanity-1a8ada64

export default {
  name: "term",
  type: "document",
  title: "Term",
  fields: [
    {
      name: "canonicalName",
      title: "Term",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "canonicalName",
      },
    },
    {
      name: "internalDescription",
      title: "Internal Description",
      description: "What the term means",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          marks: {
            annotations: [
              {
                name: "relatedTerm",
                title: "Related Term",
                type: "object",
                fields: [
                  {
                    name: "reference",
                    type: "reference",
                    to: [
                      {
                        type: "term",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      //using recipe from https://www.sanity.io/schemas/list-referring-documents-backlinks-in-sanity-1a8ada64
      name: "referringDocuments",
      title: "Referenced By",
      type: "array",
      of: [{ type: "term" }],
      readOnly: true,
      inputComponent: ReferencedBy,
      // Optional: You can read this option in ReferencedBy.tsx to filter the list
      // of backlinks by document type.
      // options: {
      //   referenceType: 'course',
      // },
    },
  ],
};
