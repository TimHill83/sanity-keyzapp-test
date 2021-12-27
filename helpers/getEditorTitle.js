// This function takes a document and returns a title, even if there's no title field, using predefined logic
export const getEditorTitle = (sanityDocument) => {
  if (sanityDocument.title) return sanityDocument.title;
  switch (sanityDocument._type) {
    case "term":
      return sanityDocument.canonicalName;
    default:
      return "No Title";
  }
};
