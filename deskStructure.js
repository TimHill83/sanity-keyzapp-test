import S from "@sanity/desk-tool/structure-builder";
import EmailPreview from "./components/emailPreview";

export const getDefaultDocumentNode = () => {
  // Give all documents the JSON preview,
  // as well as the default form view
  return S.document().views([S.view.form(), S.view.component(EmailPreview).title("Preview")]);
};
export default () => S.list().title("Base").items(S.documentTypeListItems());
