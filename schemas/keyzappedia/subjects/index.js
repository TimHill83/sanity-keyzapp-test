import technologyProduct from "./technologyProduct";
import bestPractice from "./bestPractice";
import company from "./company";
import generalArticle from "./generalArticle";
import industry from "./industry";
import question from "./question";
import standard from "./standard";
import term from "./term";

export const subjectSchemas = [
  technologyProduct,
  bestPractice,
  company,
  generalArticle,
  industry,
  question,
  standard,
  term,
];

function subjectTypesList() {
  console.log("subjectTypesList() is running");
  let list = [];
  subjectSchemas.map((s) => {
    list.push({
      type: s.name,
    });
  });
  return list;
}

function subjectFilterGroqString() {
  console.log("subjectFilterGroqString() is running");
  return `_type in [${subjectSchemas
    .map((item) => `"${item.name}"`)
    .join(", ")}]`;
}

export const subjectTypes = subjectTypesList();
export const subjectFilterGroq = subjectFilterGroqString();
