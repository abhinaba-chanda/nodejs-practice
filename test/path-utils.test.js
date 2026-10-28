const test = require("node:test");
const assert = require("node:assert");
const { fileInfo, changeExt } = require("../13-path-utils/paths.js");

test("fileInfo and changeExt", () => {
  assert.deepStrictEqual(fileInfo("docs/notes.txt"), { dir: "docs", name: "notes", ext: ".txt" });
  assert.strictEqual(changeExt("docs/notes.txt", ".md"), "docs/notes.md");
});
