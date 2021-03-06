import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import MjmlRenderer from "./components/MjmlRenderer";
import { getEditorTitle } from "./helpers/getEditorTitle";
import { createSuperPane } from "sanity-super-pane";
import { topicFilterGroq } from "./schemas/keyzappedia/topics";

import technologyProduct from "./schemas/keyzappedia/topics/technologyProduct";

const relationshipList = (type, fieldName, listTitle) => {
  const testField = type.fields.filter((field) => field.name === fieldName)[0];

  const theListTitle = listTitle ?? testField.title ?? testField.name;

  if (testField.type === "string" && testField.options.list.length > 0) {
    let structure = [];
    testField.options.list.forEach((option) => {
      const filter = `_type == '${type.name}' && ${fieldName} == '${option.value}'`;
      //console.log(filter);
      structure.push(
        S.listItem()
          .title(option.title)
          .child(S.documentList().title(option.title).filter(filter))
      );
    });
    structure.push(
      S.listItem()
        .title("Not Set")
        .child(
          S.documentList()
            .title("Not Set")
            .filter(`_type == '${type.name}' && !defined(${fieldName})`)
        )
    );
    return S.list().title(theListTitle).items(structure);
  }
  if (testField.type === "reference") return null;
};

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
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "media.tag",
            "emailTemplate",
            "technologyProduct",
            "articleContent",
          ].includes(item.getId())
      ),
      S.listItem()
        .title("Products & Services")
        .child(
          S.list()
            .title("Products & Services")
            .items([
              S.listItem()
                .title("By Relationship To Keyzapp")
                .child(
                  relationshipList(
                    technologyProduct,
                    "relationshipToKeyzappProduct"
                  )
                ),
              S.listItem()
                .title("By Primary Category")
                .child(relationshipList(technologyProduct, "primaryCategory")),
              // S.listItem().title("By Company").child(null),
              S.listItem()
                .title("All Products and Services")
                .child(createSuperPane("technologyProduct", S)),
            ])
        ),
      S.divider(),

      S.listItem()
        .title("Management")
        .child(
          S.list()
            .title("Management")
            .items([
              S.listItem()
                .title("Other Items")
                .child(
                  S.list()
                    .title("Other Items")
                    .items([
                      ...S.documentTypeListItems().filter(
                        (item) => item.getId() === "media.tag"
                      ),
                    ])
                ),
              S.listItem()
                .title("Email Template Manager")
                .child(
                  S.list()
                    .title("Email")
                    .items(
                      S.documentTypeListItems().filter(
                        (item) => item.getId() === "emailTemplate"
                      )
                    )
                ),
              S.listItem()
                .title("Issues")
                .child(
                  S.list()
                    .title("Issues")
                    .items([
                      S.listItem()
                        .title("Without Current Slug")
                        .child(
                          S.documentList()
                            .title("Without slug")
                            .filter(
                              `${topicFilterGroq} && !defined(slug.current)`
                            )
                        ),
                    ])
                ),
            ])
        ),
      ,
      S.divider(),
    ]);
