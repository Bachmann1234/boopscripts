/**
 {
    "api":1,
    "name":"Epoch Seconds to Human",
    "description":"Formants epoc seconds to UTC and Local human readable time",
    "author":"Bachmann",
    "icon":"watch",
    "tags":"timestamp,epoch,convert"
  }
 **/

function epochSecondsToHuman(text) {
    const date = new Date(parseInt(text, 10) * 1000);
    const utc = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
    return `local: ${date.toLocaleString()}
utc: ${utc.toLocaleString()}`;
}

function main(state) {
    try {
        state.text = epochSecondsToHuman(state.text);
    } catch (error) {
        state.postError("Failed to convert");
    }
}

module.exports = epochSecondsToHuman;
