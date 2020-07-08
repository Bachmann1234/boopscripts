const formatDict = require("./script");

test("formats empty dict", () => {
  expect(formatDict("{}")).toBe("{\n    \n}");
});

test("formats basic key value pairs", () => {
  expect(formatDict("{'dog': 3, u'cat': 4}")).toBe(
    "{\n    'dog': 3,\n     u'cat': 4\n}"
  );
});
