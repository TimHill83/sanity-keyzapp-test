export default {
  name: "linksList",
  title: "Links",
  description: "List of associated external links",
  type: "array",
  of: [
    {
      type: "object",
      name: "link",
      title: "Link",
      fields: [
        {
          name: "linkType",
          title: "Link Type",
          type: "string",
          options: {
            list: [
              { title: "Website", value: "website" },
              { title: "Teams", value: "teams" },
              { title: "CRM", value: "zohoCrm" },
              { title: "Other", value: "other" },
            ],
          },
        },
        {
          name: "href",
          title: "URL",
          description: "The driect link to the item",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              scheme: ["http", "https", "teams"],
            }),
        },
      ],
    },
  ],
};
