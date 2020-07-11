const formatDict = require("./formatPython");

test("formats empty dict", () => {
  expect(formatDict("{}")).toBe(
      "{\n" +
      "    \n" +
      "}"
  );
});

test("formats basic key value pairs", () => {
  expect(formatDict("{'dog': 3, u'cat': 4}")).toBe(
    "{\n" +
      "    'dog': 3,\n" +
      "    u'cat': 4\n" +
      "}"
  );
});

test("Formats nested with list", () => {
  expect(formatDict("{'test':4,'bird':{1,2,2},'dog':{\"eow\":3,\"neat\":[1,2,3]}}")).toBe(
"{\n" +
      "    'test': 4,\n" +
      "    'bird': {\n" +
      "        1,\n" +
      "        2,\n" +
      "        2\n" +
      "    },\n" +
      "    'dog': {\n" +
      "        \"eow\": 3,\n" +
      "        \"neat\": [\n" +
      "            1,\n" +
      "            2,\n" +
      "            3\n" +
      "        ]\n" +
      "    }\n" +
      "}"
  );
});

test("escapes when parsing string", () => {
  expect(formatDict("{'test':4,'bird':'{1,2,2}','dog':'{\"eow\":3,\"neat\":[1,2,3]}'}")).toBe(
      "{\n" +
      "    'test': 4,\n" +
      "    'bird': '{1,2,2}',\n" +
      "    'dog': '{\"eow\":3,\"neat\":[1,2,3]}'\n" +
      "}"
  );
});
