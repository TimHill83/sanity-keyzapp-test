import { FiExternalLink } from "react-icons/fi";
import keyzappediaTypes from "./keyzappedia/keyzappediaTypes";
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
