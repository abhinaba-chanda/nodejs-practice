const test = require("node:test");
const assert = require("node:assert");
const { loadConfig } = require("../12-env-config/config.js");

test("loadConfig defaults and overrides", () => {
  assert.deepStrictEqual(loadConfig({}), { port: 3000, debug: false, name: "node-practice" });
  assert.strictEqual(loadConfig({ PORT: "8080", DEBUG: "true" }).port, 8080);
});
