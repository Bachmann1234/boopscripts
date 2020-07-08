/**
 {
    "api":1,
    "name":"Pretty Print Python Dict",
    "description":"Formats a python dictionary to be more human readable",
    "author":"Bachmann",
    "icon":"broom",
    "tags":"format,prettyprint,python,dict"
  }
 **/

function newLineWithIndent(indentLevel, indentAmount) {
  let result = [];
  result.push("\n");
  for (let i = 0; i < indentLevel * indentAmount; i++) {
    result.push(" ");
  }
  return result;
}

function formatDict(text) {
  const indentAmount = 4;
  let indentLevel = 0;
  let result = [];
  text.replace(/\s/g, "");
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    switch (char) {
      case "{":
        indentLevel += 1;
        result.push(char, ...newLineWithIndent(indentLevel, indentAmount));
        break;
      case "}":
        indentLevel -= 1;
        result.push(...newLineWithIndent(indentLevel, indentAmount), char);
        break;
      case ",":
        result.push(char, ...newLineWithIndent(indentLevel, indentAmount));
        break;
      default:
        result.push(char);
    }
  }
  return result.join("");
}

function main(state) {
  try {
    state.text = formatDict(state.text);
  } catch (error) {
    state.postError("Failed to format dict");
  }
}

module.exports = formatDict;
