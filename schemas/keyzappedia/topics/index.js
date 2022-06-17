import technologyProduct from "./technologyProduct";
import bestPractice from "./bestPractice";
import company from "./company";
import generalArticle from "./generalArticle";
import industry from "./industry";
import question from "./question";
import standard from "./standard";
import term from "./term";
import resource from "./resource";

export const topicSchemas = [
  generalArticle,
  bestPractice,
  company,
  industry,
  question,
  resource,
  standard,
  technologyProduct,
  term,
];

// No idea why thi
function topicTypesList() {
  console.log("topicTypesList() is running");
  let list = [];
  topicSchemas.map((s) => {
    list.push({
      type: s.name,
    });
  });
  console.log(list);
  return list;
}

function topicFilterGroqString() {
  console.log("topicFilterGroqString() is running");
  return `_type in [${topicSchemas
    .map((item) => `"${item.name}"`)
    .join(", ")}]`;
}

export let topicTypes = [
  { type: "term" },
  { type: "company" },
  { type: "technologyProduct" },
  { type: "industry" },
  { type: "article" },
  { type: "bestPractice" },
  { type: "standard" },
  { type: "question" },
];

export const ttl = topicTypesList(); // Doesn't work

export const topicFilterGroq = topicFilterGroqString();
