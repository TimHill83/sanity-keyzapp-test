import { HiOutlineDatabase } from "react-icons/hi";
import { BsTable, BsListUl } from "react-icons/bs";
// An example datalist

export default {
  name: "dataView",
  title: "Data View",
  type: "object",
  // icon: HiOutlineDatabase,
  groups: [
    { name: "setup", title: "Setup", default: true },
    { name: "query", title: "Query" },
  ],
  preview: {
    select: {
      title: "title",
      summary: "internalDescription",
      renderStyle: "renderStyle",
    },
    prepare({ title, summary, renderStyle }) {
      let icon = HiOutlineDatabase;
      console.log(renderStyle);
      switch (renderStyle) {
        case "table":
          icon = BsTable;
          break;
        case "definitionList":
          icon = BsListUl;
          break;
        default:
          break;
      }
      return {
        title,
        subtitle: summary,
        media: icon,
      };
    },
  },
  fields: [
    {
      name: "query",
      type: "text",
      group: "query",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Might be shown as a caption or title",
      group: "setup",
    },
    {
      name: "internalDescription",
      title: "Internal Description",
      type: "string",
      description:
        "An extra note about what the data should show.  This is more for design purposes than shown to the user.",
      group: "setup",
    },
    {
      name: "renderStyle",
      title: "Style",
      description: "How should the data best be displayed?",
      type: "string",
      options: {
        list: [
          { title: "Simple list", value: "definitionList" },
          { title: "Table", value: "table" },
        ],
      },
      group: "setup",
    },
    {
      name: "tableColumns",
      type: "array",
      of: [
        {
          name: "tableColumn",
          title: "Table Column",
          type: "object",
          fields: [
            {
              title: "Column Name",
              name: "columnName",
              type: "string",
            },
            {
              name: "accessor",
              description: "The data key used to find the data in this column",
              type: "string",
            },
            {
              name: "dataType",
              description: "The data type represented by the column",
              type: "string",
              options: {
                list: [
                  { title: "Plain text", value: "string" },
                  { title: "Enhanced Text", value: "basicText" },
                ],
              },
            },
          ],
        },
      ],
      group: "setup",
    },
  ],
};
