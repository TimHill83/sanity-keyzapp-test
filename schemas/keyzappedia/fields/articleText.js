import { NoteStyle, WarningStyle, TipStyle } from "../../../components/previews/articleText";

export default {
  name: "articleText",
  title: "Article",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 1", value: "h1" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Heading 5", value: "h5" },
        { title: "Heading 6", value: "h6" },
        {
          title: "Note",
          value: "note",
          blockEditor: { render: NoteStyle },
        },
        {
          title: "Tip",
          value: "tip",
          blockEditor: { render: TipStyle },
        },
        {
          title: "Warning",
          value: "warning",
          blockEditor: { render: WarningStyle },
        },

        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        annotations: [
          {
            name: "relatedTerm",
            title: "Related Term",
            type: "internalLink",
          },
          {
            name: "externalLink",
            title: "Link",
            type: "externalLink",
          },
        ],
      },
    },
    { type: "baseImage" },
  ],
};
