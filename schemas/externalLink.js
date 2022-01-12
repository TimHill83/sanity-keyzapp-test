import { FiLink } from "react-icons/fi";
export default {
  name: "externalLink",
  title: "External Link",
  type: "object",
  icon: FiLink,
  fields: [
    {
      name: "href",
      title: "Link",
      type: "url",
    },
  ],
};
