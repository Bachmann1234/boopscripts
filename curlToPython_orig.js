const curlconverter = require('curlconverter');

/*
 To bundle this:
 run this
 `browserify curlToPython_orig.js -o curlToPythonBundle.js`
 Then add the boop comment to the top of the bundle.

 Then add this line right below the comment
 const window = this;
 */

global.main = function(state) {
    try {
        state.text = curlconverter.toPython(state.text);
    } catch (error) {
        state.postError("Failed to format dict");
    }
}
