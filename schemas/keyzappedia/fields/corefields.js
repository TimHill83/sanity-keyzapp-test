import articleText from "./articleText";

const fieldgroups = [
  {
    name: "core",
    title: "Core Data",
    default: true,
  },

  {
    name: "synonyms",
    title: "Synonyms",
  },
  {
    name: "links",
    title: "Links",
  },
];
const fields = {
  name: {
    name: "canonicalName",
    type: "string",
    group: "core",
  },
  synonyms: {
    name: "synonyms",
    title: "Synonyms",
    description: "Other names for the term",
    type: "array",
    group: "synonyms",
    of: [
      {
        type: "object",
        fields: [
          {
            type: "string",
            name: "synonym",
          },
          {
            type: "array",
            name: "synonymNotes",
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
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
    options: {
      layout: "tags",
    },
  },
  slug: {
    name: "slug",
    title: "Slug",
    description: "A unique identifier that's used in the URL",
    type: "slug",
    validation: (Rule) => Rule.required(),
    options: {
      source: "canonicalName",
    },
    fieldset: "termdata",
    group: "core",
  },
  summaryImage: {
    name: "summaryImage",
    title: "Logo or Summary Image",
    type: "image",
    options: { hotspot: true },
    fieldset: "termdata",
    group: "core",
  },
  internalDescription: {
    name: "internalDescription",
    title: "Definition",
    description: "What the term means.  Keep it to around 2 sentences.",
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
          ],
        },
      },
    ],
    fieldset: "termdata",
    group: "core",
  },
  articleText: {
    ...articleText,
    description: "An explanatory article",
    group: "core",
  },
};

export { fields, fieldgroups };
