// Tests for programs 8-10. Run: npm test
const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const { parseCsv } = require("../08-csv-to-json/csv.js");
const { urlInfo, isValidUrl } = require("../09-url-parser/url-info.js");
const { hashText, hashFile } = require("../10-file-hash/hash.js");

test("csv rows become objects with numbers converted", () => {
  const rows = parseCsv("name,number\nPedri,8\n\nGavi,6\n");
  assert.deepStrictEqual(rows, [
    { name: "Pedri", number: 8 },
    { name: "Gavi", number: 6 },
  ]);
  assert.deepStrictEqual(parseCsv(""), []);
});

test("sample players.csv parses", () => {
  const text = fs.readFileSync(path.join(__dirname, "../08-csv-to-json/players.csv"), "utf8");
  const rows = parseCsv(text);
  assert.strictEqual(rows.length, 3);
  assert.strictEqual(rows[1].number, 10);
});

test("url parts and query are read", () => {
  const info = urlInfo("https://example.com/search?q=node&page=2");
  assert.strictEqual(info.host, "example.com");
  assert.strictEqual(info.path, "/search");
  assert.deepStrictEqual(info.query, { q: "node", page: "2" });
  assert.strictEqual(info.secure, true);
  assert.strictEqual(isValidUrl("not a url"), false);
});

test("sha256 of text and file match", async () => {
  const known = "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824";
  assert.strictEqual(hashText("hello"), known);
  const file = path.join(os.tmpdir(), `hash-${process.pid}.txt`);
  fs.writeFileSync(file, "hello");
  assert.strictEqual(await hashFile(file), known);
  fs.unlinkSync(file);
  await assert.rejects(hashFile(path.join(os.tmpdir(), "does-not-exist-123.txt")));
});
