/**
 {
    "api":1,
    "name":"Format In Query",
    "description":"Takes a whitespace delimited list and turns it into a comma delimited one",
    "author":"Bachmann",
    "icon":"elephant",
    "tags":"database,sql"
  }
 **/

function formatInQuery(text) {
  return text
    .split(/\s+/)
    .filter(s => s)
    .map(s => `'${s}'`)
    .join();
}

function main(state) {
  state.text = formatInQuery(state.text);
}

module.exports = formatInQuery;
