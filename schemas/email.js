import { FaMailBulk } from "react-icons/fa";
export default {
  name: "emailTemplate",
  title: "Email",
  type: "document",
  icon: FaMailBulk,
  fields: [
    {
      title: "Internal Title",
      name: "title",
      description: "An internal title for this email",
      type: "string",
    },
    {
      title: "Subject",
      name: "subject",
      description: "The email subject",
      type: "string",
    },
    {
      title: "Pre-Header",
      name: "preHeader",
      description: "The preheader line of the email",
      type: "string",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "titleBlock" }, { type: "emailSection" }],
    },
  ],
};
