import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import Iframe from "sanity-plugin-iframe-pane";
import contentIFrame from "./components/contentIFrame";
import EmailPreview from "./components/emailPreview";

const JsonPreview = ({ document }) => (
  <>
    <h1>JSON Data for "{document.displayed.title}"</h1>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </>
);

const myfunc = async function (doc) {
  console.log(doc);
  const Url = "http://localhost:7071/api/Generate?sanityid=" + doc._id;
  let htmlOutput = fetch(Url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      return result.html;
    });
  return htmlOutput;
};

export const getDefaultDocumentNode = () => {
  // Give all documents the JSON preview,
  // as well as the default form view
  return S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title("JSON"),
    S.view
      .component(Iframe)
      .options({
        url: myfunc,
        // Accepts an async function
        //url: (doc) => resolveProductionUrl(doc),
        // OR a string
        //url: `https://www.keyzapp.com`,
      })
      .title("IFrame"),
    S.view
      .component(contentIFrame)
      .options({
        url: myfunc,
        // Accepts an async function
        //url: (doc) => resolveProductionUrl(doc),
        // OR a string
        //url: `https://www.keyzapp.com`,
      })
      .title("Hacked IFrame"),
    S.view
      .component(EmailPreview)
      // .options({
      //   url: myfunc,
      //   // Accepts an async function
      //   //url: (doc) => resolveProductionUrl(doc),
      //   // OR a string
      //   //url: `https://www.keyzapp.com`,
      // })
      .title("New"),
  ]);
};
export default () => S.list().title("Base").items(S.documentTypeListItems());
