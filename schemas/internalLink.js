import { FiExternalLink } from "react-icons/fi";
export default {
  name: "internalLink",
  title: "Internal Link",
  type: "object",
  icon: FiExternalLink,
  fields: [
    {
      name: "reference",
      type: "reference",
      to: [
        {
          type: "term",
        },
        { type: "company" },
        { type: "technologyProduct" },
        { type: "industry" },
      ],
    },
  ],
};
