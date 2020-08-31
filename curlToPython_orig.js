const curlconverter = require('curlconverter');

/*
 To bundle this:
 run this
 `browserify curlToPython_orig.js -o curlToPythonBundle.js`

 Then add this json block as a block comment

  {
    "api":1,
    "name":"Curl To Python",
    "description":"Converts a curl command to a small python script",
    "author":"Bachmann",
    "icon":"metamorphose",
    "tags":"curl,python,requests,convert"
  }
  Then add this line to the top of the script
  const window = this;
 */
global.main = function(state) {
    try {
        state.text = curlconverter.toPython(state.text);
    } catch (error) {
        state.postError("Failed to convert Curl Command");
    }
}
