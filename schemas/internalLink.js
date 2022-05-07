import { FiExternalLink } from "react-icons/fi";
import keyzappediaTypes from "./keyzappedia/topics/keyzappediaTypes";
export default {
  name: "internalLink",
  title: "Internal Link",
  type: "object",
  icon: FiExternalLink,
  fields: [
    {
      name: "reference",
      type: "reference",
      to: keyzappediaTypes,
    },
  ],
};
