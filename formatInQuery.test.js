const formatInQuery = require("./formatInQuery");

test("Formats empty string", () => {
  expect(formatInQuery("")).toStrictEqual("");
});


test("formats single item", () => {
  expect(formatInQuery("1234")).toStrictEqual("1234");
});


test("formats list of spaced items", () => {
  expect(formatInQuery("1234 5678 9101112")).toStrictEqual("1234,5678,9101112");
});

test("formats list of newlined items", () => {
  expect(formatInQuery("1234\n5678\n9101112")).toStrictEqual("1234,5678,9101112");
});

test("formats list of mixed space items", () => {
  expect(formatInQuery("1234\n  5678\n\t 9101112")).toStrictEqual("1234,5678,9101112");
});
