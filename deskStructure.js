import S from "@sanity/desk-tool/structure-builder";
import EmailPreview from "./components/emailPreview";
import React from "react";
import mjmlrenderer from "./components/mjmlrenderer";

const JsonPreview = ({ document }) => (
  <div>
    <h1>JSON Data for "{document.displayed.title}"</h1>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </div>
);

export const getDefaultDocumentNode = () => {
  // Give all documents the JSON preview,
  // as well as the default form view
  return S.document().views([
    S.view.form(),
    S.view.component(EmailPreview).title("Preview"),
    S.view.component(JsonPreview).title("JSON"),
    S.view.component(mjmlrenderer).title("MJML Test"),
  ]);
};
export default () => S.list().title("Content").items(S.documentTypeListItems());
