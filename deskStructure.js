import S from "@sanity/desk-tool/structure-builder";
import EmailPreview from "./components/emailPreview";
import React from "react";
import MjmlRenderer from "./components/MjmlRenderer";
import { getEditorTitle } from "./helpers/getEditorTitle";
import { createSuperPane } from "sanity-super-pane";

const JsonPreview = ({ document }) => (
  <div>
    <h1>JSON Data for "{getEditorTitle(document.displayed)}"</h1>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </div>
);

export const getDefaultDocumentNode = ({ schemaType }) => {
  let viewsArray = [];
  viewsArray.push(S.view.form());
  if (schemaType === "emailTemplate") {
    viewsArray.push(S.view.component(MjmlRenderer).title("Preview"));
  }
  viewsArray.push(S.view.component(JsonPreview).title("JSON"));
  return S.document().views(viewsArray);
};

export default () =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter((item) => !["media.tag", "emailTemplate"].includes(item.getId())),
      S.divider(),
      S.listItem()
        .title("Email Template Manager")
        .child(
          S.list()
            .title("Email")
            .items(S.documentTypeListItems().filter((item) => item.getId() === "emailTemplate"))
        ),
      S.divider(),
      S.listItem()
        .title("Other Items")
        .child(
          S.list()
            .title("Other Items")
            .items([...S.documentTypeListItems().filter((item) => item.getId() === "media.tag")])
        ),
    ]);
