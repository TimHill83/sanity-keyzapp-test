import { CgWebsite } from "react-icons/cg";
import { HiLink, HiOutlineDocumentText } from "react-icons/hi";
export default {
  name: "linksList",
  title: "Links",
  description: "List of associated external links",

  type: "array",
  of: [
    {
      type: "object",
      name: "link",
      title: "Link Type",
      fields: [
        {
          name: "linkType",
          title: "Link Type",
          type: "string",
          options: {
            list: [
              { title: "Website", value: "website" },
              { title: "Document", value: "document" },
              { title: "Folder", value: "folder" },
              { title: "Teams", value: "teams" },
              { title: "CRM", value: "zohoCrm" },
              { title: "Other", value: "other" },
            ],
          },
        },
        {
          name: "href",
          title: "URL",
          description: "The direct link to the item",
          type: "url",
          validation: (Rule) =>
            Rule.required().uri({
              scheme: ["http", "https", "teams"],
            }),
        },
        {
          name: "title",
          title: "Link Title",
          type: "string",
        },
      ],
      preview: {
        select: {
          title: "title",
          summary: "href",
          linkType: "linkType",
        },
        prepare({ title, summary, linkType }) {
          let media = HiLink;
          switch (linkType) {
            case "website":
              media = CgWebsite;
              break;
            case "document":
              media = HiOutlineDocumentText;
              break;
            default:
          }

          return {
            title: title ?? linkType,
            subtitle: summary,
            media: media,
          };
        },
      },
    },
  ],
};
