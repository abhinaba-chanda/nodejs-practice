const test = require("node:test");
const assert = require("node:assert");
const { slugify, truncate } = require("../11-string-tools/strings.js");

test("slugify and truncate", () => {
  assert.strictEqual(slugify("  Hello Node World! "), "hello-node-world");
  assert.strictEqual(truncate("abcdefghij", 6), "abc...");
  assert.strictEqual(truncate("abc", 6), "abc");
});
