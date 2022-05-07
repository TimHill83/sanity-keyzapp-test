import { fields, fieldGroupList } from "./fields/corefields";
import { RiArticleLine } from "react-icons/ri";

export default {
  name: "articleContent",
  type: "document",
  title: "Article Content",
  description: "Article content that is about a topic",
  icon: RiArticleLine,
  __experimental_search: [], //empty array means this is excluded from the default search
  groups: fieldGroupList(), //fieldgroups,

  fields: [
    {
      ...fields.name,
      title: "Title",
      description: "The article title",
      fieldset: null,
    },
    {
      ...fields.articleText,
      group: "core",
    },
  ],
};
