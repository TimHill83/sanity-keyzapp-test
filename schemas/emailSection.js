import { BsViewStacked } from "react-icons/bs";
import React from "react";
export default {
  name: "emailSection",
  title: "Section",
  description: "Email Section",
  type: "object",
  icon: BsViewStacked,
  fields: [
    {
      name: "backgroundColor",
      title: "Background Colour",
      type: "string",
    },
    {
      name: "fullWidth",
      title: "Full Width Section",
      type: "boolean",
    },
    {
      name: "columns",
      title: "Columns",
      type: "array",
      of: [{ type: "emailColumn" }],
    },
  ],
  preview: {
    select: {
      columns: "columns",
    },
    prepare(value) {
      const block = (value.columns[0].content.content || []).find((block) => block._type === "block");
      return {
        title: block
          ? block.children
              .filter((child) => child._type === "span")
              .map((span) => span.text)
              .join("")
          : "No text",
        subtitle: "Columns: " + value.columns.length,
      };
      // prepare(selection) {
      //   const { columns } = selection;

      //   return {
      //     title: "Section",
      //     subtitle: "Columns: " + columns.length,
      //   };
    },
    // component: `<div>Hello</div>`,
  },
};
