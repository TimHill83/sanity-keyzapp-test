import React, { Component } from "react";
import { HiOutlineDatabase } from "react-icons/hi";
import { BsTable, BsListUl } from "react-icons/bs";
// An example datalist

export default {
  name: "dataView",
  title: "Data View",
  type: "object",
  fieldsets: [
    {
      name: "queryInstructions",
      title: "Instructions",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

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
      name: "queryDescription",
      type: "boolean", //will never be saved!
      group: "query",
      fieldset: "queryInstructions",
      inputComponent: React.forwardRef((props, ref) => {
        const { parent } = props;
        let heading = "No Display type selected";
        let message = () => null;
        if (parent.renderStyle === "table") {
          heading = "Construct a query for a Table";
          message = () => (
            <span>
              The fields returned in the query projection should be referenced
              as the accessor in the column heading. Make sure the correct data
              type is return (e.g.) if plain text, it should return a string. If
              Enhanced text, it should be return an array of Portable Text.
            </span>
          );
        } else if (parent.renderStyle === "definitionList") {
          heading = "Construct a query for a Description List";
          message = () => (
            <>
              <p>
                A Definition List is a list which shows a highlighted word or
                prhase, followed by a description.
              </p>
              <p>It requires the following fields to be projected:</p>
              <ul>
                <li>
                  <strong>id</strong> - For use as a key
                </li>
                <li>
                  <strong>title</strong> - For use as the highlighted word or
                  phrase
                </li>
                <li>
                  <strong>description</strong> - (Must be plain text!) For the
                  descriptive text.
                </li>
                <li>
                  <strong>type</strong> - For building a valid link (if the
                  title is linked)
                </li>
                <li>
                  <strong>slug</strong> - For building a valid link (if the
                  title is linked)
                </li>
              </ul>
            </>
          );
        }
        return (
          <div>
            <h3>{heading}</h3>
            {message()}
          </div>
        );
      }),
    },
    {
      name: "query",
      title: "GROQ Query",
      description:
        "Make sure you validate your query in the Desk Tool before publishing",
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
          icon: null,
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
      options: {
        // layout: "grid",
      },
    },
  ],
};
