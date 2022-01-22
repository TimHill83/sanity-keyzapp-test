import ReferencedBy from "../../components/inputs/ReferencedBy"; //using recipe from https://www.sanity.io/schemas/list-referring-documents-backlinks-in-sanity-1a8ada64
import articleText from "./fields/articleText";
import linksList from "./fields/linksList";

export default {
  name: "term",
  type: "document",
  title: "Term",
  groups: [
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
  ],
  fieldsets: [
    {
      name: "termdata",
      options: {
        columns: 2,
      },
    },
  ],
  fields: [
    {
      name: "canonicalName",
      title: "Term",
      description: "The main (canonical) name for the term",
      type: "string",
      fieldset: "termdata",
      group: "core",
    },
    {
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
    {
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
    {
      name: "summaryImage",
      title: "Logo or Summary Image",
      type: "image",
      options: { hotspot: true },
      fieldset: "termdata",
      group: "core",
    },
    {
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
    {
      ...articleText,
      description: "An explanatory article",
      group: "core",
    },
    {
      ...linksList,
      group: "links",
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
