// Run: npm test   (or: node --test)
const test = require("node:test");
const assert = require("node:assert");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const root = path.join(__dirname, "..");

test("hello prints the name", () => {
  const out = execFileSync("node", [path.join(root, "01-hello-node/hello.js"), "Abhinaba"], { encoding: "utf8" });
  assert.match(out, /Hello, Abhinaba!/);
});

test("todo app adds, completes and removes", () => {
  const file = path.join(os.tmpdir(), `todos-${process.pid}.json`);
  const run = (...args) =>
    execFileSync("node", [path.join(root, "02-todo-cli/todo.js"), ...args], {
      encoding: "utf8",
      env: { ...process.env, TODO_FILE: file },
    });
  run("add", "Learn", "Node.js");
  run("add", "Watch Barça");
  run("done", "1");
  assert.match(run("list"), /1\. \[x\] Learn Node\.js\n2\. \[ \] Watch Barça/);
  run("remove", "1");
  assert.deepStrictEqual(JSON.parse(fs.readFileSync(file, "utf8")).map((t) => t.text), ["Watch Barça"]);
  fs.unlinkSync(file);
});

test("http server answers routes", async () => {
  const server = require("../03-http-server/server.js");
  await new Promise((r) => server.listen(0, r));
  const base = `http://localhost:${server.address().port}`;
  assert.strictEqual((await fetch(base + "/")).status, 200);
  assert.deepStrictEqual(await (await fetch(base + "/api/hello?name=Leo")).json(), { message: "Hello, Leo!" });
  assert.strictEqual((await fetch(base + "/nope")).status, 404);
  server.close();
});

test("word count analyzes text", () => {
  const { analyze } = require("../04-file-reader/word-count.js");
  const r = analyze("Football football code\nmore code football");
  assert.strictEqual(r.lines, 2);
  assert.strictEqual(r.words, 6);
  assert.deepStrictEqual(r.top[0], ["football", 3]);
});

test("password has every kind of character", () => {
  const { generate, SETS } = require("../07-password-generator/password.js");
  const p = generate(20);
  assert.strictEqual(p.length, 20);
  for (const set of Object.values(SETS)) assert.ok([...p].some((c) => set.includes(c)));
});
