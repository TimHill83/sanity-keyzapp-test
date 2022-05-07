import articleText from "./articleText";
import ReferencedBy from "../../../components/inputs/ReferencedBy";
import { array } from "prop-types";
import { initial } from "lodash";
const fieldgroups = [
  {
    name: "core",
    title: "Core Data",
    default: true,
  },
  {
    name: "article",
    title: "Article",
  },
  {
    name: "links",
    title: "Links",
  },
];

/** Retuns an array of field groups for use in Sanity document schemas */
function fieldGroupList(middleGroup?:Array<any>) : Array<any> {
  let initialGroup = [{
    name: "core",
    title: "Core Data",
    default: true,
  },
  {
    name: "article",
    title: "Article",
    }, // To be removed once transition is complete
  {
    name: "synonyms",
    title: "Synonyms",
    }]; 
  let endGroup = [ {
    name: "links",
    title: "Links",
  },{
    name: "references",
    title: "References",
  }];
  return initialGroup.concat(middleGroup ? middleGroup : [], endGroup)

}

const fieldsets = {
   basicInfo: {
      name: "basicInfo",
      title: "Basic Information",
      options: {
        columns: 2,
        collapsible: true,
        collapsed: false,
      },
    },
}

const fields = {
  name: {
    name: "title",
    type: "string",
    group: "core",
    fieldset: fieldsets.basicInfo.name
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
      source: "title",
    },
    fieldset: fieldsets.basicInfo.name,
    group: "core",
  },
  summaryImage: {
    name: "summaryImage",
    title: "Logo or Summary Image",
    type: "image",
    fields: [
      {
        name: "altText",
        title: "Alt Text",
        type: "string"
      }
    ],
    options: { hotspot: true },
    fieldset: fieldsets.basicInfo.name,
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
    group: "core",
  },
  website: {
    name: "website",
    title: "Main Website",
    type: "url",
    validation: (Rule) =>
      Rule.uri({
        scheme: ["http", "https"],
      }),
  },
  articleText: {
    ...articleText,
    description: "An explanatory article",
    group: "article",
  },
  referringDocuments: {
    //using recipe from https://www.sanity.io/schemas/list-referring-documents-backlinks-in-sanity-1a8ada64
    name: "referringDocuments",
    title: "Referenced By",
    type: "array",
    of: [{ type: "term" }],
    readOnly: true,
    inputComponent: ReferencedBy,
    group: "references"
    // Optional: You can read this option in ReferencedBy.tsx to filter the list
    // of backlinks by document type.
    // options: {
    //   referenceType: 'course',
    // },
  },
};



export { fields, fieldgroups, fieldGroupList, fieldsets };
