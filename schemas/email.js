import { FaMailBulk } from "react-icons/fa";
export default {
  name: "emailTemplate",
  title: "Email",
  type: "document",
  icon: FaMailBulk,
  fields: [
    {
      title: "Title",
      name: "title",
      description: "An internal title for this email",
      type: "string",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "titleBlock" }, { type: "textSection" }, { type: "twoColumnSection" }, { type: "emailSection" }],
    },
  ],
};
