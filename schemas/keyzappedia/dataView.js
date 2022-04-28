// An example datalist

export default {
  name: "dataView",
  type: "object",
  fields: [
    {
      name: "query",
      type: "text",
    },
    {
      name: "renderStyle",
      type: "string",
      options: {
        list: ["definitionList", "table"],
      },
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
    },
  ],
};
