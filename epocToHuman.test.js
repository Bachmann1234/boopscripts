const epocToHuman = require("./epocToHuman");

test("Handles basic example", () => {
    expect(epocToHuman("1594513164")).toBe(
        "local: 7/11/2020, 8:19:24 PM\n" +
        "utc: 7/12/2020, 12:19:24 AM"
    );
});
