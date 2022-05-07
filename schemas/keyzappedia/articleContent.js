import { fields, fieldGroupList } from "./fields/corefields";
import { RiArticleLine } from "react-icons/ri";

export default {
  name: "articleContent",
  type: "document",
  title: "Article Content",
  description: "Article content that is about a topic",
  icon: RiArticleLine,
  __experimental_search: [],
  groups: fieldGroupList(), //fieldgroups,

  fields: [
    {
      ...fields.name,
      title: "Title",
      description: "The article title",
    },

    {
      ...fields.articleText,
      group: "core",
    },
  ],
};
